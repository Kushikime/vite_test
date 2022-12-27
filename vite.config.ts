import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // where is the index.html of the project.
  base: './', // where is the public folder located.
  plugins: [react()],
  server: {
    port: 3000,
  },
})
