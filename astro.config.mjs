// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://apex-karting.vercel.app', // Update with your actual domain
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
