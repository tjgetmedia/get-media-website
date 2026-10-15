import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes every asset path relative, so the build works at
// username.github.io/repo-name/ AND on a custom domain without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
})
