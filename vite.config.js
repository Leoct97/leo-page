import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://leoct97.github.io/leo-page/',
  plugins: [react()]
})
