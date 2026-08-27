import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use './' para funcionar em qualquer hospedagem (Vercel, Netlify, subpastas, etc.)
  base: './',
})
