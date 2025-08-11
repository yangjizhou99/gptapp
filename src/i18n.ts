// src/i18n.ts
export type Lang = 'zh' | 'ja' | 'en'

export const DICT: Record<Lang, Record<string, string>> = {
  zh: {
    // 模板相关
    templates: '模板',
    myTemplates: '我的模板',
    builtinTemplates: '内置模板',
    saveAsTemplate: '保存为我的模板',
    templateName: '模板名称',
    
    // 导入导出
    importExif: '从样片生成',
    copyShare: '复制复刻码',
    exportJson: '导出 Recipe JSON',
    importJson: '导入 JSON',
    
    // 向导
    wizard: '三步向导',
    step1: '第一步：选择风格',
    step2: '第二步：选择机身镜头',
    step3: '第三步：选择构图',
    selectTemplate: '选择模板',
    selectSensor: '选择画幅',
    selectFocal: '选择焦距',
    selectFraming: '选择构图',
    applyWizard: '应用设置',
    
    // 相机参数
    cameraSettings: '相机参数',
    subjectHeight: '模特身高',
    subjectWidth: '体宽',
    focal: '焦距',
    aperture: '光圈',
    iso: 'ISO',
    shutter: '快门',
    fov: 'FOV（预估）',
    bokeh: '虚化指数',
    softness: '软硬度',
    
    // 控制
    transformTarget: '变换控制目标',
    camera: '相机',
    subject: '模特',
    light: '灯光',
    
    // 提示信息
    shareCodeCopied: '复刻码已复制到剪贴板',
    templateSaved: '模板已保存',
    exifImported: '已根据 EXIF 生成初始方案',
    jsonParseError: 'JSON 解析失败',
    exifParseError: 'EXIF 解析失败',
    
    // 单位
    cm: 'cm',
    mm: 'mm',
    meter: 'm',
    degree: '°',
    
    // 其他
    language: '语言',
    hint: '提示：拖拽右侧场景中的小黑盒改变相机位置；拖拽蓝色矩形改变模特位置；右下角为相机预览。'
  },
  
  ja: {
    // テンプレート関連
    templates: 'テンプレート',
    myTemplates: 'マイ・テンプレート',
    builtinTemplates: '内蔵テンプレート',
    saveAsTemplate: 'マイ・テンプレに保存',
    templateName: 'テンプレート名',
    
    // インポート・エクスポート
    importExif: '作例から生成',
    copyShare: 'レシピコードをコピー',
    exportJson: 'Recipe JSON をエクスポート',
    importJson: 'JSON をインポート',
    
    // ウィザード
    wizard: '3ステップウィザード',
    step1: 'ステップ1：スタイル選択',
    step2: 'ステップ2：カメラ・レンズ選択',
    step3: 'ステップ3：構図選択',
    selectTemplate: 'テンプレート選択',
    selectSensor: 'センサーサイズ選択',
    selectFocal: '焦点距離選択',
    selectFraming: '構図選択',
    applyWizard: '設定を適用',
    
    // カメラ設定
    cameraSettings: 'カメラ設定',
    subjectHeight: 'モデル身長',
    subjectWidth: '体幅',
    focal: '焦点距離',
    aperture: '絞り',
    iso: 'ISO',
    shutter: 'シャッター',
    fov: 'FOV（推定）',
    bokeh: 'ボケ指数',
    softness: 'ソフトネス',
    
    // コントロール
    transformTarget: '変換制御対象',
    camera: 'カメラ',
    subject: 'モデル',
    light: 'ライト',
    
    // メッセージ
    shareCodeCopied: 'レシピコードをクリップボードにコピーしました',
    templateSaved: 'テンプレートを保存しました',
    exifImported: 'EXIF から初期設定を生成しました',
    jsonParseError: 'JSON の解析に失敗しました',
    exifParseError: 'EXIF の解析に失敗しました',
    
    // 単位
    cm: 'cm',
    mm: 'mm',
    meter: 'm',
    degree: '°',
    
    // その他
    language: '言語',
    hint: 'ヒント：右側のシーンで黒いボックスをドラッグしてカメラ位置を変更；青い矩形をドラッグしてモデル位置を変更；右下角はカメラプレビューです。'
  },
  
  en: {
    // Template related
    templates: 'Templates',
    myTemplates: 'My Templates',
    builtinTemplates: 'Built-in Templates',
    saveAsTemplate: 'Save as My Template',
    templateName: 'Template Name',
    
    // Import/Export
    importExif: 'Generate from Sample',
    copyShare: 'Copy Share Code',
    exportJson: 'Export Recipe JSON',
    importJson: 'Import JSON',
    
    // Wizard
    wizard: '3-Step Wizard',
    step1: 'Step 1: Select Style',
    step2: 'Step 2: Select Camera & Lens',
    step3: 'Step 3: Select Framing',
    selectTemplate: 'Select Template',
    selectSensor: 'Select Sensor',
    selectFocal: 'Select Focal Length',
    selectFraming: 'Select Framing',
    applyWizard: 'Apply Settings',
    
    // Camera settings
    cameraSettings: 'Camera Settings',
    subjectHeight: 'Subject Height',
    subjectWidth: 'Subject Width',
    focal: 'Focal Length',
    aperture: 'Aperture',
    iso: 'ISO',
    shutter: 'Shutter',
    fov: 'FOV (Estimated)',
    bokeh: 'Bokeh Index',
    softness: 'Softness',
    
    // Controls
    transformTarget: 'Transform Target',
    camera: 'Camera',
    subject: 'Subject',
    light: 'Light',
    
    // Messages
    shareCodeCopied: 'Share code copied to clipboard',
    templateSaved: 'Template saved',
    exifImported: 'Initial setup generated from EXIF',
    jsonParseError: 'JSON parsing failed',
    exifParseError: 'EXIF parsing failed',
    
    // Units
    cm: 'cm',
    mm: 'mm',
    meter: 'm',
    degree: '°',
    
    // Others
    language: 'Language',
    hint: 'Hint: Drag the black box in the right scene to change camera position; drag the blue rectangle to change subject position; bottom-right corner shows camera preview.'
  }
}

let currentLang: Lang = 'zh'

// 从 localStorage 读取语言设置
export function initLanguage(): void {
  const saved = localStorage.getItem('photo-recipe-lang') as Lang
  if (saved && DICT[saved]) {
    currentLang = saved
  }
}

// 设置语言
export function setLanguage(lang: Lang): void {
  currentLang = lang
  localStorage.setItem('photo-recipe-lang', lang)
}

// 获取当前语言
export function getCurrentLanguage(): Lang {
  return currentLang
}

// 翻译函数
export function t(key: string): string {
  return DICT[currentLang][key] || key
}

// 初始化
initLanguage()
