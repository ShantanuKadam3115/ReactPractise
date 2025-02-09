import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  
  test: {
    globals: true, // Enable global variables like `describe`, `test`, and `expect`
    environment: 'jsdom', // Use a browser-like environment for testing
    setupFiles: './src/setupTests.js', // Optional: Global setup file
    include: ["**/*.test.js"], // The test files to include
  },
})
