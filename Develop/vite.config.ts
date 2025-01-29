import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  server: {
    host: '0.0.0.0',  // Allow external network access
    port: 5173,        // Use a custom port
    allowedHosts: ['module-13-challenge-2.onrender.com'], // Add your Render hostname here
  },
  preview: {
    host: '0.0.0.0',  // Expose production preview server externally
    port: parseInt(process.env.PORT || '10000', 10),
  },
});

