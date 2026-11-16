import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is published as a GitHub Pages project site at
// https://rackaushalya.github.io/RACK-F1-Themed-Portfolio/, so every built
// asset URL (JS, CSS, fonts, images via import.meta.env.BASE_URL) must be
// prefixed with the repository name. Routing uses HashRouter, so page URLs
// look like /RACK-F1-Themed-Portfolio/#/race/<slug> and need no server rewrites.
export default defineConfig({
  base: '/RACK-F1-Themed-Portfolio/',
  plugins: [react()],
})
