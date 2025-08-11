export type Vec3 = [number, number, number]

export type SubjectVisual = 'rect' | 'figure'  // 新增

export interface SubjectSpec {
  height: number // cm
  width: number  // cm（肩/体宽的近似）
  position: Vec3 // 地面投影点 (x,0,z)，y 由高度推算
  visual?: SubjectVisual // 默认为 'figure'
  figureStyle?: {
    headRatio?: number  // 头部占总体高度比例，默认 0.12
    upperRatio?: number // 上半身比例（肩到胯），默认 0.38
    lowerRatio?: number // 下半身比例（胯到脚），默认 0.50
    colors?: { head?: number; upper?: number; lower?: number } // 十六进制
  }
}

export interface CameraSpec {
  sensor: { w: number; h: number } // mm
  focal: number
  aperture: number
  iso: number
  shutter: string
}

export type AimMode = 'subjectEye' | 'subjectCenter' | 'custom'
export type Framing = 'full' | 'half' | 'close'

export interface LensSpec {
  name?: string
  isZoom: boolean
  focalMin: number // mm
  focalMax: number // mm
  minAperture?: number // 该镜头的最大光圈（f/1.8 -> 1.8）
}

export interface StyleMeta {
  framing: Framing
  defaultAim: AimMode // 应用模板时设置到 cameraRig.aim.mode（custom 不建议作为默认）
  focalRange?: { min: number; max: number } // 模板可接受的焦段范围
  notes?: string
}

export interface CameraRig {
  position: Vec3
  lookAt: Vec3
  spec: CameraSpec
  aim?: {
    mode: AimMode
    customPoint?: Vec3 // 仅在 mode='custom' 使用
    eyeRatio?: number  // 眼平高度比例，默认 0.93（身高*0.93）
  }
}

export interface Recipe {
  subject: SubjectSpec
  cameraRig: CameraRig
  light: { position: Vec3 }
  lens?: LensSpec               // 新增：不参与渲染，仅用于 UI/筛选与展示
  styleMeta?: StyleMeta         // 新增：仅模板/风格使用
}
