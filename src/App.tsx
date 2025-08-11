import { useMemo, useState, useEffect } from 'react'
import ThreeStage from './ThreeStage'
import Wizard from './wizard'
import type { Recipe, CameraSpec } from './types'
import { vfovDeg, hfovDeg, bokehIndex, lightSoftness } from './utils_photomath'
import { TEMPLATES, toRecipe, type RecipeWithTitle } from './templates'
import { encodeRecipeToHash, decodeRecipeFromHash, copyToClipboard } from './utils_share'
import { recipeFromExif, getExifInfo } from './utils_exif'
import { getDistanceInfo, vFovRad, distanceForFraming, cameraPoseFromParams } from './utils_auto'
import type { Vec3 } from './types'
import { sanitizeRecipe, printVersionInfo } from './schema'
import { t, setLanguage, getCurrentLanguage, type Lang } from './i18n'

const defaultSpec: CameraSpec = {
  sensor: { w: 22.3, h: 14.9 }, // Canon APS-C mm
  focal: 50, // mm
  aperture: 1.8,
  iso: 400,
  shutter: '1/250'
}

const defaultRecipe: Recipe = {
  subject: { height: 170, width: 45, position: [0,0,0] },
  cameraRig: { position: [1.8, 1.55, -2.4], lookAt: [0,1.6,0], spec: defaultSpec },
  light: { position: [-1.2, 1.9, -0.6] }
}

export default function App() {
  const [recipe, setRecipe] = useState<Recipe>(defaultRecipe)
  const [target, setTarget] = useState<'camera' | 'subject' | 'light' | 'aim'>('camera')
  const [showWizard, setShowWizard] = useState(false)
  const [message, setMessage] = useState('')
  const [currentLang, setCurrentLang] = useState<Lang>(getCurrentLanguage())
  
  // 保存最近的构图偏好，用于"确定参数"按钮
  const [lastFraming, setLastFraming] = useState<'full'|'half'|'close'>('half')
  const [lastYaw, setLastYaw] = useState<number>(20)
  const [lastPitch, setLastPitch] = useState<number>(-4)
  
  // 控制辅助元素显示
  const [showHelpers, setShowHelpers] = useState(true)
  
  // 控制模式开关
  const [controlMode, setControlMode] = useState(false)
  
  // 对准点点击设置
  const [aimClickMode, setAimClickMode] = useState<'off'|'holdShift'|'always'>('holdShift')
  const [autoSwitchAimOnClick, setAutoSwitchAimOnClick] = useState(false)

  // 从URL hash加载recipe
  useEffect(() => {
    const hashRecipe = decodeRecipeFromHash()
    if (hashRecipe) {
      const validated = sanitizeRecipe(hashRecipe)
      if (validated) {
        setRecipe(validated)
        showMessage(t('shareCodeLoaded') || '已从复刻码加载')
      }
    }
    printVersionInfo()
  }, [])

  // 我的模板管理
  const [myTemplates, setMyTemplates] = useState<RecipeWithTitle[]>(() => {
    try {
      const saved = localStorage.getItem('myTemplates.v1')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const saveMyTemplate = () => {
    const name = prompt(t('templateName'))
    if (!name) return

    const newTemplate: RecipeWithTitle = {
      ...recipe,
      title: name,
      tags: ['自定义']
    }

    const updated = [...myTemplates, newTemplate]
    setMyTemplates(updated)
    localStorage.setItem('myTemplates.v1', JSON.stringify(updated))
    showMessage(t('templateSaved'))
  }

  const vFOV = useMemo(()=>vfovDeg(recipe.cameraRig.spec).toFixed(1), [recipe])
  const hFOV = useMemo(()=>hfovDeg(recipe.cameraRig.spec).toFixed(1), [recipe])

  // Simplified metrics preview
  const focusDistM = 1.2
  const bgDistM = 3
  const bokeh = useMemo(()=>bokehIndex(recipe.cameraRig.spec, focusDistM, bgDistM, 1.6).toFixed(1), [recipe])
  const softness = useMemo(()=>lightSoftness(80, 1.2).toFixed(2), [])
  const distance = useMemo(()=>getDistanceInfo(recipe), [recipe])

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  const handleCopyShare = async () => {
    const hash = encodeRecipeToHash(recipe)
    if (hash) {
      const url = window.location.origin + window.location.pathname + hash
      const success = await copyToClipboard(url)
      if (success) {
        showMessage(t('shareCodeCopied'))
        // 同时更新当前页面的hash
        window.location.hash = hash
      }
    }
  }

  const saveJSON = () => {
    const blob = new Blob([JSON.stringify(recipe, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'recipe.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const loadJSON = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result))
        const validated = sanitizeRecipe(data)
        if (validated) {
          setRecipe(validated)
        } else {
          showMessage(t('jsonParseError'))
        }
      } catch (e) {
        showMessage(t('jsonParseError'))
      }
    }
    reader.readAsText(file, 'utf-8')
  }

  const handleExifImport = async (file: File) => {
    try {
      const newRecipe = await recipeFromExif(file, recipe)
      setRecipe(newRecipe)
      showMessage(t('exifImported'))
    } catch (error) {
      showMessage(t('exifParseError'))
    }
  }

  const handleLanguageChange = (lang: Lang) => {
    setLanguage(lang)
    setCurrentLang(lang)
    // 强制重新渲染
    window.location.reload()
  }

  // 确定参数按钮功能
  const applyCameraSpecToScene = () => {
    try {
      const { sensor, focal } = recipe.cameraRig.spec
      const v = vFovRad(sensor.h, focal)
      const fill = lastFraming === 'full' ? 0.90 : lastFraming === 'half' ? 0.60 : 0.40
      const dist = distanceForFraming(recipe.subject.height/100, v, fill)
      const eyeY = Number((recipe.subject.height * 0.93 / 100).toFixed(3))
      
      console.log('Applying camera spec:', { sensor, focal, v, fill, dist, eyeY })
      
      const { position, lookAt } = cameraPoseFromParams(
        recipe.subject.position as Vec3, eyeY, dist, lastYaw, lastPitch
      )
      
      console.log('New camera position:', position, 'lookAt:', lookAt)
      
      setRecipe(prev => ({ 
        ...prev, 
        cameraRig: { 
          ...prev.cameraRig, 
          position, 
          lookAt 
        } 
      }))
      showMessage('已应用参数调整机位')
    } catch (error) {
      console.error('Error applying camera spec:', error)
      showMessage('应用参数时出错')
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Photo Recipe v2.0</h3>
          <div className="language-selector">
            <select value={currentLang} onChange={e => handleLanguageChange(e.target.value as Lang)}>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        {message && (
          <div className="message">{message}</div>
        )}

        {/* 控制选择框 - 始终显示 */}
        <div className="section">
          <div className="row">
            <label>{t('transformTarget')}</label>
            <select value={target} onChange={e=>setTarget(e.target.value as 'camera' | 'subject' | 'light' | 'aim')}>
              <option value="camera">{t('camera')}</option>
              <option value="subject">{t('subject')}</option>
              <option value="light">{t('light')}</option>
              <option value="aim">对准点</option>
            </select>
          </div>
          
          <div className="row">
            <label className="hstack">
              <input 
                type="checkbox" 
                checked={controlMode} 
                onChange={e=>setControlMode(e.target.checked)} 
              />
              控制模式（拖动对象）
            </label>
          </div>
          
          <div className="row">
            <label className="hstack">
              <input 
                type="checkbox" 
                checked={showHelpers} 
                onChange={e=>setShowHelpers(e.target.checked)} 
              />
              显示控制箭头（拖拽手柄/光源箭头）
            </label>
          </div>

          <div className="row">
            <label>设对准点</label>
            <select value={aimClickMode} onChange={e=>setAimClickMode(e.target.value as 'off'|'holdShift'|'always')}>
              <option value="off">关闭</option>
              <option value="holdShift">按住 Shift 点击</option>
              <option value="always">总是可点击</option>
            </select>
          </div>

          <div className="row">
            <label className="hstack">
              <input 
                type="checkbox" 
                checked={autoSwitchAimOnClick} 
                onChange={e=>setAutoSwitchAimOnClick(e.target.checked)} 
              />
              点击后自动切到"对准点"目标
            </label>
          </div>
        </div>

        {/* 其他UI - 根据showHelpers控制显示 */}
        <div style={{ display: showHelpers ? 'block' : 'none' }}>
          {/* 模板选择 */}
          <div className="section">
          <h4>{t('templates')}</h4>
          <div className="row">
            <select 
              onChange={e => {
                const index = Number(e.target.value)
                if (index >= 0) {
                  if (index < myTemplates.length) {
                    setRecipe(toRecipe(myTemplates[index]))
                  } else {
                    const templateIndex = index - myTemplates.length
                    setRecipe(toRecipe(TEMPLATES[templateIndex]))
                  }
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>{t('selectTemplate')}</option>
              {myTemplates.length > 0 && (
                <optgroup label={t('myTemplates')}>
                  {myTemplates.map((template, index) => (
                    <option key={`my-${index}`} value={index}>
                      {template.title}
                    </option>
                  ))}
                </optgroup>
              )}
              <optgroup label={t('builtinTemplates')}>
                {TEMPLATES.map((template, index) => (
                  <option key={`builtin-${index}`} value={myTemplates.length + index}>
                    {template.title}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          <div className="row">
            <button className="btn btn-small" onClick={saveMyTemplate}>
              {t('saveAsTemplate')}
            </button>
          </div>
        </div>

        {/* 向导和导入导出 */}
        <div className="section">
          <div className="row hstack">
            <button className="btn" onClick={() => setShowWizard(true)}>
              {t('wizard')}
            </button>
            <button className="btn" onClick={handleCopyShare}>
              {t('copyShare')}
            </button>
          </div>
          <div className="row hstack">
            <label className="btn" htmlFor="exif-import">
              {t('importExif')}
            </label>
            <input 
              id="exif-import" 
              type="file" 
              accept="image/*" 
              style={{display:'none'}}
              onChange={e => {
                const f = e.target.files?.[0]
                if (f) handleExifImport(f)
              }} 
            />
          </div>
        </div>

        {/* 相机参数 */}
        <div className="section">
          <h4>{t('cameraSettings')}</h4>
          <div className="row">
            <label>{t('subjectHeight')} / {t('subjectWidth')} ({t('cm')})</label>
            <div className="hstack">
              <input type="number" value={recipe.subject.height}
                onChange={e=>setRecipe({...recipe, subject:{...recipe.subject, height: Number(e.target.value)}})} />
              <input type="number" value={recipe.subject.width}
                onChange={e=>setRecipe({...recipe, subject:{...recipe.subject, width: Number(e.target.value)}})} />
            </div>
          </div>

          <div className="row">
            <label>人像显示模式</label>
            <select 
              value={recipe.subject.visual ?? 'figure'} 
              onChange={e=>setRecipe({
                ...recipe, 
                subject:{
                  ...recipe.subject, 
                  visual: e.target.value as 'rect' | 'figure'
                }
              })}
            >
              <option value="figure">三段人像</option>
              <option value="rect">矩形模式</option>
            </select>
          </div>

          <div className="row">
            <label>{t('focal')} ({t('mm')})</label>
            <input type="number" value={recipe.cameraRig.spec.focal}
              onChange={e=>setRecipe({
                ...recipe,
                cameraRig:{...recipe.cameraRig, spec:{...recipe.cameraRig.spec, focal: Number(e.target.value)}}
              })} />
          </div>

          <div className="row">
            <label>{t('aperture')} (f/)</label>
            <input type="number" step="0.1" value={recipe.cameraRig.spec.aperture}
              onChange={e=>setRecipe({
                ...recipe,
                cameraRig:{...recipe.cameraRig, spec:{...recipe.cameraRig.spec, aperture: Number(e.target.value)}}
              })} />
          </div>

          <div className="row">
            <label>{t('iso')}</label>
            <input type="number" value={recipe.cameraRig.spec.iso}
              onChange={e=>setRecipe({
                ...recipe,
                cameraRig:{...recipe.cameraRig, spec:{...recipe.cameraRig.spec, iso: Number(e.target.value)}}
              })} />
          </div>

          <div className="row">
            <label>{t('shutter')}</label>
            <input type="text" value={recipe.cameraRig.spec.shutter}
              onChange={e=>setRecipe({
                ...recipe,
                cameraRig:{...recipe.cameraRig, spec:{...recipe.cameraRig.spec, shutter: e.target.value }}
              })} />
          </div>

          <div className="row">
            <button className="btn btn-primary" onClick={applyCameraSpecToScene}>
              确定参数（自动调整机位）
            </button>
          </div>

          {/* 对准模式控制 */}
          <div className="row">
            <label>对准模式</label>
            <select 
              value={recipe.cameraRig.aim?.mode || 'subjectCenter'} 
              onChange={e => {
                const newMode = e.target.value as 'subjectEye' | 'subjectCenter' | 'custom'
                setRecipe(prev => {
                  const newRecipe = { ...prev }
                  
                  if (newMode === 'custom') {
                    // 切换到自定义模式时，如果没有自定义点，则初始化为当前有效对准点
                    if (!newRecipe.cameraRig.aim?.customPoint) {
                      const currentLookAt = newRecipe.cameraRig.lookAt
                      newRecipe.cameraRig.aim = {
                        mode: 'custom',
                        customPoint: currentLookAt,
                        eyeRatio: 0.93
                      }
                    } else {
                      newRecipe.cameraRig.aim = {
                        ...newRecipe.cameraRig.aim,
                        mode: 'custom'
                      }
                    }
                    // 只有在 autoSwitchAimOnClick 为 true 时才自动切换控制目标
                    if (autoSwitchAimOnClick) {
                      setTarget('aim')
                    }
                  } else {
                    newRecipe.cameraRig.aim = {
                      ...(newRecipe.cameraRig.aim || {}),
                      mode: newMode,
                      eyeRatio: newRecipe.cameraRig.aim?.eyeRatio ?? 0.93
                    }
                  }
                  
                  return newRecipe
                })
              }}
            >
              <option value="subjectCenter">主体中心</option>
              <option value="subjectEye">眼平高度</option>
              <option value="custom">自定义对准点</option>
            </select>
          </div>

          {recipe.cameraRig.aim?.mode === 'subjectEye' && (
            <div className="row">
              <label>眼平比例</label>
              <input 
                type="number" 
                step="0.01" 
                min="0.8" 
                max="1.0" 
                value={recipe.cameraRig.aim?.eyeRatio ?? 0.93}
                onChange={e => setRecipe(prev => ({
                  ...prev,
                  cameraRig: {
                    ...prev.cameraRig,
                    aim: {
                      ...prev.cameraRig.aim,
                      mode: 'subjectEye',
                      eyeRatio: Number(e.target.value)
                    }
                  }
                }))}
              />
            </div>
          )}
        </div>

        {/* 预览信息 */}
        <div className="section">
          <div className="row">
            <label>{t('fov')}</label>
            <div className="muted">H {hFOV}{t('degree')} · V {vFOV}{t('degree')}</div>
          </div>

          <div className="row">
            <label>{t('bokeh')} & {t('softness')}</label>
            <div className="muted">Bokeh {bokeh} · Soft {softness}</div>
          </div>

          <div className="row">
            <label>{distance}</label>
          </div>
        </div>

        {/* 导入导出 */}
        <div className="section">
          <div className="row hstack">
            <button className="btn" onClick={saveJSON}>{t('exportJson')}</button>
            <label className="btn" htmlFor="load">{t('importJson')}</label>
            <input id="load" type="file" accept="application/json" style={{display:'none'}}
              onChange={e=>{ const f=e.target.files?.[0]; if (f) loadJSON(f) }} />
          </div>
        </div>

        <hr />
        <p className="muted">
          {t('hint')}
        </p>
        </div>
      </aside>

      <ThreeStage 
        recipe={recipe} 
        onRecipeChange={(newRecipe) => {
          if (typeof newRecipe === 'function') {
            setRecipe(newRecipe)
          } else {
            setRecipe(newRecipe)
          }
        }} 
        target={target} 
        onTargetChange={setTarget}
        showHelpers={showHelpers}
        controlMode={controlMode}
        aimClickMode={aimClickMode}
        autoSwitchAimOnClick={autoSwitchAimOnClick}
      />

      {showWizard && (
        <Wizard
          recipe={recipe}
          onRecipeChange={setRecipe}
          onClose={() => setShowWizard(false)}
        />
      )}
    </div>
  )
}
