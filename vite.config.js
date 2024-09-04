// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/categories': 'http://localhost:5000',  // Assuming Flask is running on port 5000
    },
  },
});
