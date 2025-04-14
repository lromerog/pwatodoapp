import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Todo App',
        short_name: 'Todos',
        start_url: '/',
        theme_color: '#0F172A',
        background_color: '#FFFFFF',
        display: 'standalone',
        icons: [
  {
    src: '/icon-192x192.png',
    sizes: '192x192',
    type: 'image/png',
    purpose: 'any', // Agregado
  },
  {
    src: '/icon-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'any', // Agregado
  },
],
  screenshots: [
  {
    src: '/screenshot-narrow.png',
    sizes: '720x1080',
    type: 'image/png',
    form_factor: 'narrow',
  },
  {
    src: '/screenshot-wide.png',
    sizes: '720x1080', // Cambiado de 1280x720 a 720x1080
    type: 'image/png',
    form_factor: 'wide',
  },
],
      },
    }),
  ],
});