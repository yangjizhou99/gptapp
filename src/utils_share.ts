// src/utils_share.ts
import LZString from 'lz-string'
import type { Recipe } from './types'

export const encodeRecipeToHash = (r: Recipe): string => {
  try {
    const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(r))
    return '#r=' + compressed
  } catch (error) {
    console.error('Failed to encode recipe:', error)
    return ''
  }
}

export const decodeRecipeFromHash = (): Recipe | null => {
  const hash = window.location.hash
  const match = hash.match(/^#r=(.+)$/)
  if (!match) return null
  
  try {
    const compressed = match[1]
    const json = LZString.decompressFromEncodedURIComponent(compressed)
    if (!json) return null
    return JSON.parse(json) as Recipe
  } catch (error) {
    console.error('Failed to decode recipe from hash:', error)
    return null
  }
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    // Fallback for older browsers
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (fallbackError) {
      console.error('Failed to copy to clipboard:', fallbackError)
      return false
    }
  }
}
