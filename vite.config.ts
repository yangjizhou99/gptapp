import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gptapp/', // GitHub Pages 项目页面路径
  build: {
    outDir: 'docs', // 输出到 docs 文件夹，用于 GitHub Pages
  },
})
