/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rosso: { DEFAULT: '#D40000', deep: '#A80000', soft: '#F3D9D4' },
        cream: { DEFAULT: '#F3EFE6', warm: '#ECE6D9', paper: '#F8F5EE' },
        ink: { DEFAULT: '#111110', soft: '#1C1B19' },
        charcoal: { DEFAULT: '#2E2D2A', mid: '#55534E', light: '#7B7870' },
        pit: { DEFAULT: '#D8D3C7', light: '#E6E1D6' },
      },
      fontFamily: {
        display: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        script: ['"Caveat Brush"', 'cursive'],
      },
      letterSpacing: { label: '0.22em' },
      maxWidth: { page: '1360px' },
    },
  },
  plugins: [],
}
