import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  base: process.env.NODE_ENV == 'production'?'/weather/dist/':'',
  plugins: [react()],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
