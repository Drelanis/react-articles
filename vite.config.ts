import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react()],
  resolve: {
    alias: [
      { find: '$shared', replacement: '/src/shared' },
      { find: '$lib', replacement: '/src/shared/lib' },
      { find: '$features', replacement: '/src/features' },
      { find: '$entities', replacement: '/src/entities' },
      { find: '$app', replacement: '/src/app' },
      { find: '$pages', replacement: '/src/pages' },
      { find: '$widgets', replacement: '/src/widgets' },
    ],
  },
  define: {
    IS_DEV: JSON.stringify(true),
    API: JSON.stringify('http://localhost:8000'),
    PROJECT: JSON.stringify('frontend'),
  },
});
