import type { CameraSpec } from '../types'

// mm to m
const mm2m = (mm: number) => mm / 1000

export function vfovDeg(spec: CameraSpec): number {
  // PerspectiveCamera uses vertical FOV
  // vFOV = 2 * atan(sensor_h / (2 * f))
  const v = 2 * Math.atan((spec.sensor.h) / (2 * spec.focal))
  return (v * 180) / Math.PI
}

export function hfovDeg(spec: CameraSpec): number {
  const h = 2 * Math.atan((spec.sensor.w) / (2 * spec.focal))
  return (h * 180) / Math.PI
}

// Very simplified bokeh index: 0..5
export function bokehIndex(spec: CameraSpec, focusDistM: number, bgDistM: number, crop=1): number {
  const f = mm2m(spec.focal)
  const N = spec.aperture
  const ratio = Math.abs(bgDistM - focusDistM) / Math.max(bgDistM, 1e-6)
  const raw = 0.6 * (f / N) * ratio * crop
  return Math.max(0, Math.min(5, raw * 5))
}

// Light softness (0 hard .. 1 soft) ~ source size / distance
export function lightSoftness(sizeCm: number, distanceM: number): number {
  const s = (sizeCm / 100) / Math.max(distanceM, 1e-6)
  return Math.max(0, Math.min(1, s))
}
