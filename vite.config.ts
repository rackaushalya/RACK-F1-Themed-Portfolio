import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps every asset path relative, so the built site works from
// any folder or static host without extra server configuration.
export default defineConfig({
  base: './',
  plugins: [react()],
})
