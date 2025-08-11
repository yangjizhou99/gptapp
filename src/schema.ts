// src/schema.ts
import type { Recipe, CameraSpec, Vec3 } from './types'

export interface ValidationResult {
  valid: boolean
  errors: string[]
}

export function validateVec3(vec: any, name: string): string[] {
  const errors: string[] = []
  
  if (!Array.isArray(vec)) {
    errors.push(`${name} 必须是数组`)
    return errors
  }
  
  if (vec.length !== 3) {
    errors.push(`${name} 必须包含3个元素`)
    return errors
  }
  
  for (let i = 0; i < 3; i++) {
    if (typeof vec[i] !== 'number' || isNaN(vec[i])) {
      errors.push(`${name}[${i}] 必须是有效数字`)
    }
  }
  
  return errors
}

export function validateCameraSpec(spec: any): string[] {
  const errors: string[] = []
  
  if (!spec || typeof spec !== 'object') {
    errors.push('cameraRig.spec 必须是对象')
    return errors
  }
  
  // 验证传感器
  if (!spec.sensor || typeof spec.sensor !== 'object') {
    errors.push('cameraRig.spec.sensor 必须是对象')
  } else {
    if (typeof spec.sensor.w !== 'number' || spec.sensor.w <= 0) {
      errors.push('cameraRig.spec.sensor.w 必须是正数')
    }
    if (typeof spec.sensor.h !== 'number' || spec.sensor.h <= 0) {
      errors.push('cameraRig.spec.sensor.h 必须是正数')
    }
  }
  
  // 验证焦距
  if (typeof spec.focal !== 'number' || spec.focal <= 0) {
    errors.push('cameraRig.spec.focal 必须是正数')
  }
  
  // 验证光圈
  if (typeof spec.aperture !== 'number' || spec.aperture <= 0) {
    errors.push('cameraRig.spec.aperture 必须是正数')
  }
  
  // 验证ISO
  if (typeof spec.iso !== 'number' || spec.iso <= 0) {
    errors.push('cameraRig.spec.iso 必须是正数')
  }
  
  // 验证快门
  if (typeof spec.shutter !== 'string' || spec.shutter.trim() === '') {
    errors.push('cameraRig.spec.shutter 必须是非空字符串')
  }
  
  return errors
}

export function validateRecipe(data: any): ValidationResult {
  const errors: string[] = []
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['数据必须是对象'] }
  }
  
  // 验证 subject
  if (!data.subject || typeof data.subject !== 'object') {
    errors.push('subject 必须是对象')
  } else {
    if (typeof data.subject.height !== 'number' || data.subject.height <= 0) {
      errors.push('subject.height 必须是正数')
    }
    if (typeof data.subject.width !== 'number' || data.subject.width <= 0) {
      errors.push('subject.width 必须是正数')
    }
    errors.push(...validateVec3(data.subject.position, 'subject.position'))
  }
  
  // 验证 cameraRig
  if (!data.cameraRig || typeof data.cameraRig !== 'object') {
    errors.push('cameraRig 必须是对象')
  } else {
    errors.push(...validateVec3(data.cameraRig.position, 'cameraRig.position'))
    errors.push(...validateVec3(data.cameraRig.lookAt, 'cameraRig.lookAt'))
    errors.push(...validateCameraSpec(data.cameraRig.spec))
  }
  
  // 验证 light
  if (!data.light || typeof data.light !== 'object') {
    errors.push('light 必须是对象')
  } else {
    errors.push(...validateVec3(data.light.position, 'light.position'))
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

export function sanitizeRecipe(data: any): Recipe | null {
  const validation = validateRecipe(data)
  
  if (!validation.valid) {
    console.error('Recipe validation failed:', validation.errors)
    return null
  }
  
  // 返回清理后的数据，包含新字段和向后兼容处理
  const result: Recipe = {
    subject: {
      height: Number(data.subject.height),
      width: Number(data.subject.width),
      position: [
        Number(data.subject.position[0]),
        Number(data.subject.position[1]),
        Number(data.subject.position[2])
      ] as Vec3,
      // 新字段：visual 和 figureStyle（可选）
      visual: data.subject.visual || 'figure',
      ...(data.subject.figureStyle && {
        figureStyle: {
          headRatio: data.subject.figureStyle.headRatio || 0.12,
          upperRatio: data.subject.figureStyle.upperRatio || 0.38,
          lowerRatio: data.subject.figureStyle.lowerRatio || 0.50,
          ...(data.subject.figureStyle.colors && {
            colors: {
              head: data.subject.figureStyle.colors.head || 0xf2c6c2,
              upper: data.subject.figureStyle.colors.upper || 0x6aa9ff,
              lower: data.subject.figureStyle.colors.lower || 0x88c0d0
            }
          })
        }
      })
    },
    cameraRig: {
      position: [
        Number(data.cameraRig.position[0]),
        Number(data.cameraRig.position[1]),
        Number(data.cameraRig.position[2])
      ] as Vec3,
      lookAt: [
        Number(data.cameraRig.lookAt[0]),
        Number(data.cameraRig.lookAt[1]),
        Number(data.cameraRig.lookAt[2])
      ] as Vec3,
      spec: {
        sensor: {
          w: Number(data.cameraRig.spec.sensor.w),
          h: Number(data.cameraRig.spec.sensor.h)
        },
        focal: Number(data.cameraRig.spec.focal),
        aperture: Number(data.cameraRig.spec.aperture),
        iso: Number(data.cameraRig.spec.iso),
        shutter: String(data.cameraRig.spec.shutter)
      },
      // 新字段：aim（向后兼容处理）
      aim: data.cameraRig.aim ? {
        mode: data.cameraRig.aim.mode || 'subjectEye',
        ...(data.cameraRig.aim.customPoint && {
          customPoint: [
            Number(data.cameraRig.aim.customPoint[0]),
            Number(data.cameraRig.aim.customPoint[1]),
            Number(data.cameraRig.aim.customPoint[2])
          ] as Vec3
        }),
        eyeRatio: data.cameraRig.aim.eyeRatio || 0.93
      } : {
        // 如果没有aim字段，为了完全兼容旧数据，设置为custom模式并使用lookAt
        mode: 'custom' as const,
        customPoint: [
          Number(data.cameraRig.lookAt[0]),
          Number(data.cameraRig.lookAt[1]),
          Number(data.cameraRig.lookAt[2])
        ] as Vec3,
        eyeRatio: 0.93
      }
    },
    light: {
      position: [
        Number(data.light.position[0]),
        Number(data.light.position[1]),
        Number(data.light.position[2])
      ] as Vec3
    }
  }
  
  return result
}

// 打印版本信息
export function printVersionInfo(): void {
  console.log('📸 Photo Recipe Tool v2.0')
  console.log('✅ 模板库、复刻码、EXIF导入、三步向导、i18n 已加载')
  console.log('🔧 Schema validation enabled')
}
