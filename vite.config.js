import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy:{
      '/api':{
        target: 'http://localhost:8088',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/,'')
      }
    }
  }

})
