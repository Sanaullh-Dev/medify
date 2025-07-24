import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/assets': '/src/assets',
      '@/pages': '/src/pages',
      '@/utils': '/src/utils',
      '@/ui-kit': '/src/ui-kit',
      '@/router': '/src/router',
      '@/constant': '/src/constant',
    }
  }
})
