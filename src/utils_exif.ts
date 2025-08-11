// src/utils_exif.ts
import * as exifr from 'exifr'
import type { Recipe } from './types'

export async function recipeFromExif(file: File, base: Recipe): Promise<Recipe> {
  try {
    const meta: any = await exifr.parse(file)
    if (!meta) return base
    
    const next = structuredClone(base)
    
    // 焦距
    if (meta.FocalLength) {
      next.cameraRig.spec.focal = Number(meta.FocalLength)
    }
    
    // 光圈
    if (meta.FNumber) {
      next.cameraRig.spec.aperture = Number(meta.FNumber)
    }
    
    // ISO
    if (meta.ISO) {
      next.cameraRig.spec.iso = Number(meta.ISO)
    }
    
    // 快门速度
    if (meta.ExposureTime) {
      const t = Number(meta.ExposureTime)
      if (t >= 1) {
        next.cameraRig.spec.shutter = `${t.toFixed(0)}s`
      } else {
        next.cameraRig.spec.shutter = `1/${Math.round(1/t)}`
      }
    }
    
    // 可选：根据相机型号推断画幅
    // 这里先保持原有画幅设置，可以后续扩展
    
    return next
  } catch (error) {
    console.error('Failed to parse EXIF:', error)
    return base
  }
}

export function getExifInfo(meta: any): string {
  const info: string[] = []
  
  if (meta.Make) info.push(`机身: ${meta.Make}`)
  if (meta.Model) info.push(`型号: ${meta.Model}`)
  if (meta.LensModel) info.push(`镜头: ${meta.LensModel}`)
  if (meta.FocalLength) info.push(`焦距: ${meta.FocalLength}mm`)
  if (meta.FNumber) info.push(`光圈: f/${meta.FNumber}`)
  if (meta.ISO) info.push(`ISO: ${meta.ISO}`)
  if (meta.ExposureTime) {
    const t = Number(meta.ExposureTime)
    const shutter = t >= 1 ? `${t.toFixed(0)}s` : `1/${Math.round(1/t)}`
    info.push(`快门: ${shutter}`)
  }
  
  return info.join(', ')
}
