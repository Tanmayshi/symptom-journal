import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
     proxy:{
      '/api/v1/user': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        historyApiFallback: true,
        
      },
      '/api/v1/symptom': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        historyApiFallback: true,
        
      },
     }
     
  },
  plugins: [react(), tailwindcss(),],
})
