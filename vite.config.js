import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'proyecto-michis-TP3/',
  plugins: [react()],
})