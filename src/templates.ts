// src/templates.ts
import type { Recipe } from './types'

export interface RecipeWithTitle extends Recipe {
  title: string
  tags?: string[]
}

export const toRecipe = (r: RecipeWithTitle): Recipe => ({
  subject: r.subject,
  cameraRig: r.cameraRig,
  light: r.light,
  lens: r.lens,
  styleMeta: r.styleMeta,
})

/** 工具：眼平高度（米） */
const eyeLevel = (cm: number) => Number((cm * 0.93 / 100).toFixed(2))

/** 常用画幅（单位：mm） */
const SENSOR = {
  FF:   { w: 36.0,  h: 24.0  },
  APS:  { w: 22.3,  h: 14.9  }, // Canon APS-C
  M43:  { w: 17.3,  h: 13.0  },
}

// ============ 带 styleMeta 的模板（10个） ============

export const TEMPLATES: RecipeWithTitle[] = [
  {
    title: '经典85等效半身（APS-C 50/2）',
    tags: ['人像','半身','室内','柔光'],
    styleMeta: { framing:'half', defaultAim:'subjectEye', focalRange:{min:45, max:60}, notes:'面部为主的中景半身' },
    subject: { height: 170, width: 45, position: [0,0,0] },
    cameraRig: {
      position: [0, eyeLevel(170), -2.0],
      lookAt:   [0, eyeLevel(170),  0.0],
      spec: { sensor: SENSOR.APS, focal: 50, aperture: 2.0, iso: 200, shutter: '1/250' },
      aim: { mode: 'subjectEye', eyeRatio: 0.93 }
    },
    light: { position: [-1.2, 1.9, -0.6] },
    lens: { isZoom:false, focalMin:50, focalMax:50, minAperture:2.0 }
  },
  {
    title: '环境人像35（APS-C 22/2.8）',
    tags: ['环境','半身/全身','自然光'],
    styleMeta: { framing:'half', defaultAim:'subjectCenter', focalRange:{min:20, max:28}, notes:'带环境的半身' },
    subject: { height: 170, width: 45, position: [0,0,0] },
    cameraRig: {
      position: [0.2, eyeLevel(170)-0.05, -1.4],
      lookAt:   [0,   eyeLevel(170),       0.0],
      spec: { sensor: SENSOR.APS, focal: 22, aperture: 2.8, iso: 200, shutter: '1/250' },
      aim: { mode: 'subjectCenter' }
    },
    light: { position: [1.0, 2.0, -1.0] },
    lens: { isZoom:false, focalMin:22, focalMax:22, minAperture:2.8 }
  },
  {
    title: '窗光清透半身（APS-C 22/1.8）',
    tags: ['窗光','半身','清透'],
    styleMeta: { framing:'half', defaultAim:'subjectEye', focalRange:{min:18, max:28} },
    subject: { height: 165, width: 42, position: [0,0,0] },
    cameraRig: {
      position: [0.0, eyeLevel(165), -1.6],
      lookAt:   [0.0, eyeLevel(165),  0.0],
      spec: { sensor: SENSOR.APS, focal: 22, aperture: 1.8, iso: 400, shutter: '1/250' },
      aim: { mode: 'subjectEye', eyeRatio: 0.93 }
    },
    light: { position: [-1.5, 1.6, 0.8] },
    lens: { isZoom:false, focalMin:22, focalMax:22, minAperture:1.8 }
  },
  {
    title: '逆光轮廓+反光板（APS-C 30/2）',
    tags: ['逆光','轮廓','户外'],
    styleMeta: { framing:'half', defaultAim:'subjectCenter', focalRange:{min:24, max:35} },
    subject: { height: 170, width: 45, position: [0,0,0] },
    cameraRig: {
      position: [-0.2, eyeLevel(170)-0.05, -1.8],
      lookAt:   [0.0,  eyeLevel(170),       0.0],
      spec: { sensor: SENSOR.APS, focal: 30, aperture: 2.0, iso: 200, shutter: '1/500' },
      aim: { mode: 'subjectCenter' }
    },
    light: { position: [0.0, 2.8, 2.0] },
    lens: { isZoom:false, focalMin:30, focalMax:30, minAperture:2.0 }
  },
  {
    title: '蝴蝶光清透妆面（FF 85/5.6）',
    tags: ['妆面','棚拍','蝴蝶光','胸像'],
    styleMeta: { framing:'close', defaultAim:'subjectEye', focalRange:{min:75, max:105} },
    subject: { height: 170, width: 45, position: [0,0,0] },
    cameraRig: {
      position: [0.0, eyeLevel(170)+0.05, -1.1],
      lookAt:   [0.0, eyeLevel(170),       0.0],
      spec: { sensor: SENSOR.FF, focal: 85, aperture: 5.6, iso: 100, shutter: '1/160' },
      aim: { mode: 'subjectEye', eyeRatio: 0.93 }
    },
    light: { position: [0.0, eyeLevel(170)+0.35, -0.6] },
    lens: { isZoom:false, focalMin:85, focalMax:85, minAperture:1.8 }
  },
  {
    title: '伦勃朗三角（FF 50/4）',
    tags: ['伦勃朗','棚拍','对比','半身'],
    styleMeta: { framing:'half', defaultAim:'subjectEye', focalRange:{min:45, max:60} },
    subject: { height: 175, width: 46, position: [0,0,0] },
    cameraRig: {
      position: [0.3, eyeLevel(175), -1.6],
      lookAt:   [0.0, eyeLevel(175),  0.0],
      spec: { sensor: SENSOR.FF, focal: 50, aperture: 4.0, iso: 100, shutter: '1/160' },
      aim: { mode: 'subjectEye', eyeRatio: 0.93 }
    },
    light: { position: [1.0, eyeLevel(175)+0.2, -0.8] },
    lens: { isZoom:false, focalMin:50, focalMax:50, minAperture:1.8 }
  },
  {
    title: '夜景霓虹环境人像（FF 35/1.8）',
    tags: ['夜景','环境','城市','半身'],
    styleMeta: { framing:'half', defaultAim:'subjectCenter', focalRange:{min:28, max:40} },
    subject: { height: 165, width: 42, position: [0,0,0] },
    cameraRig: {
      position: [-0.1, eyeLevel(165)-0.03, -1.2],
      lookAt:   [0.0,  eyeLevel(165),       0.0],
      spec: { sensor: SENSOR.FF, focal: 35, aperture: 1.8, iso: 1600, shutter: '1/125' },
      aim: { mode: 'subjectCenter' }
    },
    light: { position: [0.6, 1.5, -0.5] },
    lens: { isZoom:false, focalMin:35, focalMax:35, minAperture:1.8 }
  },
  {
    title: '全身街拍长焦压缩（APS-C 56/2.8）',
    tags: ['全身','街拍','长焦','压缩'],
    styleMeta: { framing:'full', defaultAim:'subjectCenter', focalRange:{min:50, max:85} },
    subject: { height: 170, width: 45, position: [0,0,0] },
    cameraRig: {
      position: [0.0, eyeLevel(170)+0.02, -5.0],
      lookAt:   [0.0,  eyeLevel(170),      0.0],
      spec: { sensor: SENSOR.APS, focal: 56, aperture: 2.8, iso: 200, shutter: '1/500' },
      aim: { mode: 'subjectCenter' }
    },
    light: { position: [-1.0, 2.0, -2.0] },
    lens: { isZoom:false, focalMin:56, focalMax:56, minAperture:2.8 }
  },
  {
    title: '极简高调白背景（M4/3 25/8）',
    tags: ['高调','棚拍','白背景','干净'],
    styleMeta: { framing:'full', defaultAim:'subjectCenter', focalRange:{min:20, max:35} },
    subject: { height: 168, width: 44, position: [0,0,0] },
    cameraRig: {
      position: [0.0, eyeLevel(168)+0.03, -1.7],
      lookAt:   [0.0, eyeLevel(168),       0.0],
      spec: { sensor: SENSOR.M43, focal: 25, aperture: 8.0, iso: 200, shutter: '1/125' },
      aim: { mode: 'subjectCenter' }
    },
    light: { position: [0.5, 2.2, -0.6] },
    lens: { isZoom:false, focalMin:25, focalMax:25, minAperture:1.7 }
  },
  {
    title: '低调分割光（APS-C 35/2.2）',
    tags: ['低调','分割光','戏剧感','半身'],
    styleMeta: { framing:'half', defaultAim:'subjectEye', focalRange:{min:28, max:40} },
    subject: { height: 175, width: 46, position: [0,0,0] },
    cameraRig: {
      position: [0.2, eyeLevel(175), -1.5],
      lookAt:   [0.0, eyeLevel(175),  0.0],
      spec: { sensor: SENSOR.APS, focal: 35, aperture: 2.2, iso: 200, shutter: '1/250' },
      aim: { mode: 'subjectEye', eyeRatio: 0.93 }
    },
    light: { position: [1.6, eyeLevel(175)+0.15, 0.0] },
    lens: { isZoom:false, focalMin:35, focalMax:35, minAperture:2.0 }
  },
]
