import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  ,
  server:{
    proxy:{
      '/api':{
        target: 'https://carecoding-cautious-doodle-g9x7qgrpq59cw954-8000.preview.app.github.dev/',
        changeOrigin:true,
        secure: false,
        // rewrite:(path) => path.replace(/^\/api/,'/api')
      }
    }
  }
})
