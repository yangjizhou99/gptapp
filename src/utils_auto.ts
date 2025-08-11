// src/utils_auto.ts
import * as THREE from 'three'
import type { Recipe, CameraSpec, Vec3 } from './types'

export function vFovRad(sensorHmm: number, focalMm: number): number {
  return 2 * Math.atan(sensorHmm / (2 * focalMm))
}

export function distanceForFraming(subjectRealHeightM: number, vFov: number, targetFill: number): number {
  // 让主体在取景框高度中占 targetFill（0..1）
  // 近似：场景高度 = 2 * d * tan(vFov/2)
  // 令 subjectRealHeightM = targetFill * 场景高度 → 解 d
  const d = (subjectRealHeightM) / (targetFill * 2 * Math.tan(vFov/2))
  return d
}

export interface FramingOption {
  name: string
  targetFill: number
  description: string
}

export const FRAMING_OPTIONS: FramingOption[] = [
  { name: '全身', targetFill: 0.9, description: '人物占画面高度90%' },
  { name: '半身', targetFill: 0.6, description: '人物占画面高度60%' },
  { name: '特写', targetFill: 0.4, description: '胸部以上占画面高度40%' }
]

export interface SensorOption {
  name: string
  sensor: { w: number; h: number }
  description: string
}

export const SENSOR_OPTIONS: SensorOption[] = [
  { name: '全画幅', sensor: { w: 36.0, h: 24.0 }, description: 'Full Frame 35mm' },
  { name: 'APS-C', sensor: { w: 22.3, h: 14.9 }, description: '佳能 APS-C' },
  { name: 'M4/3', sensor: { w: 17.3, h: 13.0 }, description: 'Micro Four Thirds' }
]

export interface FocalOption {
  focal: number
  name: string
  description: string
}

export const FOCAL_OPTIONS: FocalOption[] = [
  { focal: 24, name: '24mm', description: '广角环境' },
  { focal: 35, name: '35mm', description: '环境人像' },
  { focal: 50, name: '50mm', description: '标准人像' },
  { focal: 85, name: '85mm', description: '经典人像' },
  { focal: 135, name: '135mm', description: '长焦压缩' }
]

export function autoPositionCamera(
  recipe: Recipe,
  sensorOption: SensorOption,
  focalMm: number,
  framingOption: FramingOption
): Recipe {
  const next = structuredClone(recipe)
  
  // 更新传感器和焦距
  next.cameraRig.spec.sensor = sensorOption.sensor
  next.cameraRig.spec.focal = focalMm
  
  // 计算垂直FOV
  const vFov = vFovRad(sensorOption.sensor.h, focalMm)
  
  // 计算所需距离
  const subjectHeightM = recipe.subject.height / 100 // cm to m
  const distance = distanceForFraming(subjectHeightM, vFov, framingOption.targetFill)
  
  // 计算眼平高度
  const eyeHeight = subjectHeightM * 0.93
  
  // 更新相机位置（假设相机在模特正前方）
  next.cameraRig.position = [0, eyeHeight, -distance]
  next.cameraRig.lookAt = [0, eyeHeight, 0]
  
  return next
}

export function getDistanceInfo(recipe: Recipe): string {
  const cameraPos = recipe.cameraRig.position
  const subjectPos = recipe.subject.position
  
  const dx = cameraPos[0] - subjectPos[0]
  const dy = cameraPos[1] - subjectPos[1]
  const dz = cameraPos[2] - subjectPos[2]
  
  const distance = Math.sqrt(dx*dx + dy*dy + dz*dz)
  
  return `距离: ${distance.toFixed(2)}m`
}

export function cameraPoseFromParams(
  subjectCenter: Vec3,   // 主体中心（x,y,z），y 可传主体中心或地面上的垂直中心
  subjectEyeY: number,   // 眼平高度（米），如 身高*0.93/100
  distanceM: number,     // 相机到主体中心的距离（米）
  yawDeg: number,        // 水平环绕角（0 正前；+为从右侧拍人，-为从左侧）
  pitchDeg: number       // 俯仰角（- 为俯拍，+ 为仰拍）
): { position: Vec3; lookAt: Vec3 } {
  const toRad = (d:number)=> d * Math.PI/180
  const yaw = toRad(yawDeg)
  const pitch = toRad(pitchDeg)

  // 以主体中心为原点；先在 -Z 方向距离为 d，再绕 Y 轴旋转 yaw，再绕 X 轴旋转 pitch
  const offset = new THREE.Vector3(0, 0, -distanceM)
  const euler = new THREE.Euler(-pitch, yaw, 0, 'XYZ') // 注意俯仰符号约定
  offset.applyEuler(euler)

  const camPos = new THREE.Vector3(
    subjectCenter[0] + offset.x,
    subjectCenter[1] + offset.y,
    subjectCenter[2] + offset.z
  )
  const lookAt = new THREE.Vector3(subjectCenter[0], subjectEyeY, subjectCenter[2])
  return { position: [camPos.x, camPos.y, camPos.z], lookAt: [lookAt.x, lookAt.y, lookAt.z] }
}

// 计算有效的对准点（根据 aim 模式）
export function effectiveLookAtPoint(recipe: Recipe): THREE.Vector3 {
  const aim = recipe.cameraRig.aim
  const subjectPos = new THREE.Vector3(...recipe.subject.position)
  
  if (!aim || aim.mode === 'subjectCenter') {
    // 对准主体中心
    subjectPos.y = recipe.subject.height / 200 // 身体中心高度（米）
    return subjectPos
  } else if (aim.mode === 'subjectEye') {
    // 对准眼平
    const eyeRatio = aim.eyeRatio ?? 0.93
    subjectPos.y = (recipe.subject.height * eyeRatio) / 100
    return subjectPos
  } else if (aim.mode === 'custom' && aim.customPoint) {
    // 自定义对准点
    return new THREE.Vector3(...aim.customPoint)
  } else {
    // 默认返回主体中心
    subjectPos.y = recipe.subject.height / 200
    return subjectPos
  }
}
