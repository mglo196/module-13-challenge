import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],  // Ensure Vite resolves .ts and .tsx files automatically
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '10000'),
  },
});
