// src/wizard.tsx
import { useState } from 'react'
import type { Recipe, LensSpec, Framing, AimMode } from './types'
import { TEMPLATES, type RecipeWithTitle } from './templates'
import { vFovRad, distanceForFraming, cameraPoseFromParams } from './utils_auto'
import { styleCompatible } from './utils_style'
import { t } from './i18n'

interface Props {
  recipe: Recipe
  onRecipeChange: (recipe: Recipe) => void
  onClose: () => void
}

const SENSOR = {
  FF:   { w: 36.0,  h: 24.0  },        // 全画幅
  APS:  { w: 22.3,  h: 14.9  },        // 佳能 APS-C
  M43:  { w: 17.3,  h: 13.0  },        // M4/3
}

const LENS_PRESETS: LensSpec[] = [
  { name: '50mm f/1.8 (定焦)', isZoom: false, focalMin: 50, focalMax: 50, minAperture: 1.8 },
  { name: '85mm f/1.4 (定焦)', isZoom: false, focalMin: 85, focalMax: 85, minAperture: 1.4 },
  { name: '35mm f/2.0 (定焦)', isZoom: false, focalMin: 35, focalMax: 35, minAperture: 2.0 },
  { name: '24-70mm f/2.8 (变焦)', isZoom: true, focalMin: 24, focalMax: 70, minAperture: 2.8 },
  { name: '18-55mm f/3.5-5.6 (变焦)', isZoom: true, focalMin: 18, focalMax: 55, minAperture: 3.5 },
  { name: '70-200mm f/2.8 (变焦)', isZoom: true, focalMin: 70, focalMax: 200, minAperture: 2.8 },
]


export default function Wizard({ recipe, onRecipeChange, onClose }: Props) {
  const [step, setStep] = useState(1)
  
  // Step1: Camera & Lens
  const [sensor, setSensor] = useState<{w:number;h:number}>(SENSOR.APS)
  const [lens, setLens] = useState<LensSpec>(LENS_PRESETS[0])
  
  // Step2: Style selection
  const [selectedStyle, setSelectedStyle] = useState<RecipeWithTitle | null>(null)
  const [showAllStyles, setShowAllStyles] = useState(false)
  
  // Camera pose parameters
  const [yaw, setYaw] = useState(20)
  const [pitch, setPitch] = useState(-4)

  const handleApply = () => {
    if (!selectedStyle) return

    let newRecipe = { ...recipe }

    // 1. 设置机身和镜头
    newRecipe.cameraRig.spec.sensor = sensor
    newRecipe.lens = lens
    
    // 夹紧当前焦距到镜头范围内
    const currentFocal = newRecipe.cameraRig.spec.focal
    newRecipe.cameraRig.spec.focal = Math.min(Math.max(currentFocal, lens.focalMin), lens.focalMax)

    // 2. 设置styleMeta和aim
    newRecipe.styleMeta = selectedStyle.styleMeta
    if (selectedStyle.styleMeta) {
      newRecipe.cameraRig.aim = { 
        mode: selectedStyle.styleMeta.defaultAim, 
        eyeRatio: 0.93 
      }
    }

    // 3. 按模板的framing计算相机位置
    if (selectedStyle.styleMeta) {
      const fill = selectedStyle.styleMeta.framing === 'full' ? 0.90 : 
                   selectedStyle.styleMeta.framing === 'half' ? 0.60 : 0.40
      const v = vFovRad(sensor.h, newRecipe.cameraRig.spec.focal)
      const dist = distanceForFraming(newRecipe.subject.height/100, v, fill)
      const eyeY = (newRecipe.subject.height*0.93)/100
      
      const { position, lookAt } = cameraPoseFromParams(
        newRecipe.subject.position,
        eyeY,
        dist,
        yaw,
        pitch
      )
      
      newRecipe.cameraRig.position = position
      newRecipe.cameraRig.lookAt = lookAt
    }

    // 4. 合并风格层（只改灯位/标签，不覆盖相机设置）
    newRecipe.light = selectedStyle.light
    if ((selectedStyle as any).tags) {
      (newRecipe as any).tags = (selectedStyle as any).tags
    }

    onRecipeChange(newRecipe)
    onClose()
  }

  // 获取过滤后的风格列表
  const getFilteredStyles = () => {
    if (showAllStyles) {
      return TEMPLATES.map(style => ({
        style,
        compatibility: styleCompatible(style, lens)
      }))
    } else {
      return TEMPLATES
        .map(style => ({
          style,
          compatibility: styleCompatible(style, lens)
        }))
        .filter(item => item.compatibility.ok)
    }
  }

  return (
    <div className="wizard-overlay">
      <div className="wizard-modal">
        <div className="wizard-header">
          <h3>{t('wizard')}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="wizard-steps">
          <div className={`step ${step === 1 ? 'active' : ''}`}>1</div>
          <div className={`step ${step === 2 ? 'active' : ''}`}>2</div>
        </div>

        <div className="wizard-content">
          {step === 1 && (
            <div className="wizard-step">
              <h4>第一步：相机与镜头</h4>
              <p>选择传感器画幅和镜头</p>
              
              <div className="row">
                <label>传感器画幅</label>
                <select 
                  value={sensor === SENSOR.FF ? 'FF' : sensor === SENSOR.APS ? 'APS' : 'M43'} 
                  onChange={e => {
                    const sensorKey = e.target.value as 'FF' | 'APS' | 'M43'
                    setSensor(SENSOR[sensorKey])
                  }}
                >
                  <option value="FF">全画幅 (36×24mm)</option>
                  <option value="APS">APS-C (22.3×14.9mm)</option>
                  <option value="M43">M4/3 (17.3×13.0mm)</option>
                </select>
              </div>

              <div className="row">
                <label>镜头</label>
                <select 
                  value={LENS_PRESETS.findIndex(l => l.name === lens.name)} 
                  onChange={e => setLens(LENS_PRESETS[Number(e.target.value)])}
                >
                  {LENS_PRESETS.map((lensPreset, index) => (
                    <option key={index} value={index}>
                      {lensPreset.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lens-info">
                <div><strong>焦距范围:</strong> {lens.focalMin}{lens.isZoom ? `-${lens.focalMax}` : ''}mm</div>
                <div><strong>最大光圈:</strong> f/{lens.minAperture}</div>
              </div>

              <div className="row">
                <label>机位角度</label>
                <div className="hstack">
                  <div>
                    <label>水平角度 (°)</label>
                    <input 
                      type="number" 
                      value={yaw} 
                      onChange={e => setYaw(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label>俯仰角度 (°)</label>
                    <input 
                      type="number" 
                      value={pitch} 
                      onChange={e => setPitch(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="wizard-step">
              <h4>第二步：风格选择</h4>
              <p>选择拍摄风格，系统会根据镜头兼容性筛选</p>
              
              <div className="row">
                <label>
                  <input 
                    type="checkbox" 
                    checked={showAllStyles} 
                    onChange={e => setShowAllStyles(e.target.checked)}
                  />
                  显示全部风格（包括不兼容的）
                </label>
              </div>

              <div className="style-list">
                {getFilteredStyles().map(({ style, compatibility }, index) => (
                  <div
                    key={index}
                    className={`style-card ${selectedStyle?.title === style.title ? 'selected' : ''} ${!compatibility.ok ? 'incompatible' : ''}`}
                    onClick={() => compatibility.ok && setSelectedStyle(style)}
                  >
                    <div className="style-title">{style.title}</div>
                    <div className="style-meta">
                      {style.styleMeta && (
                        <>
                          <span>构图: {style.styleMeta.framing === 'full' ? '全身' : style.styleMeta.framing === 'half' ? '半身' : '特写'}</span>
                          <span>对准: {style.styleMeta.defaultAim === 'subjectEye' ? '眼平' : style.styleMeta.defaultAim === 'subjectCenter' ? '身体中心' : '自定义'}</span>
                          {style.styleMeta.focalRange && (
                            <span>焦段: {style.styleMeta.focalRange.min}-{style.styleMeta.focalRange.max}mm</span>
                          )}
                        </>
                      )}
                    </div>
                    {!compatibility.ok && (
                      <div className="incompatible-reason">{compatibility.reason}</div>
                    )}
                    {style.styleMeta?.notes && (
                      <div className="style-notes">{style.styleMeta.notes}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="wizard-footer">
          {step > 1 && (
            <button className="btn" onClick={() => setStep(step - 1)}>
              上一步
            </button>
          )}
          
          {step < 2 ? (
            <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
              下一步
            </button>
          ) : (
            <button 
              className="btn btn-primary" 
              onClick={handleApply}
              disabled={!selectedStyle}
            >
              {t('applyWizard')}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
