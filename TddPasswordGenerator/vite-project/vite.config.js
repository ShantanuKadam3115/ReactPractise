import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global variables like `describe`, `test`, and `expect`
    environment: 'jsdom', // Use a browser-like environment for testing
    setupFiles: './src/setupTests.js', // Optional: Global setup file
  },
})
