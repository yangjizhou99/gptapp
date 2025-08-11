// src/utils_style.ts
import type { LensSpec } from './types'
import type { RecipeWithTitle } from './templates'

export function styleCompatible(style: RecipeWithTitle, lens?: LensSpec): { ok: boolean; reason?: string } {
  if (!style.styleMeta || !style.styleMeta.focalRange || !lens) return { ok: true }
  const a = style.styleMeta.focalRange
  const b = { min: lens.focalMin, max: lens.focalMax }
  const intersect = Math.max(a.min, b.min) <= Math.min(a.max, b.max)
  return intersect ? { ok: true } : { ok: false, reason: `需要焦段 ${a.min}-${a.max}mm` }
}
