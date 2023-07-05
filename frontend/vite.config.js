import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
  },
  css: {
    lightningcss: {
      cssModules: true,
      drafts: {
        nesting: true,
        customMedia: true,
      },
      browserslist: '>= 0.25%',
    },
    transformer: 'lightningcss',
  },
  plugins: [react(), svgr()],
})
