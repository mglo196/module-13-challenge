import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],  // Ensure Vite resolves .ts and .tsx files automatically
  },
  server: {
    host: '0.0.0.0',  // Allow external network access for dev
    port: 5174,        // Use a custom port (optional)
    allowedHosts: [
      'module-13-challenge-2.onrender.com',  // Allow the specific host here
      'localhost',                           // You can keep localhost if needed
    ],
  },
  preview: {
    host: '0.0.0.0',  // Make sure preview server is also exposed to external network
    port: parseInt(process.env.PORT || '10000', 10),  // Use custom port from env variable (fallback to 10000)
  },
});

