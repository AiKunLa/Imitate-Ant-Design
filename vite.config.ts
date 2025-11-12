import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 使用 @use 替代 @import（已弃用）
        // 如果需要全局变量，可以在组件中单独 @use "variables" as *
        // additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  }
})
