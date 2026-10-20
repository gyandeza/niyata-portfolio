import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        routerisk: resolve(__dirname, 'routerisk.html'),
        about: resolve(__dirname, 'about.html'),
        research: resolve(__dirname, 'research.html'),
        teaching: resolve(__dirname, 'teaching.html'),
        credentials: resolve(__dirname, 'credentials.html'),
        collaborate: resolve(__dirname, 'collaborate.html'),
        labs: resolve(__dirname, 'labs.html'),
        flowlab: resolve(__dirname, 'flowlab.html'),
      },
    },
  },
})
