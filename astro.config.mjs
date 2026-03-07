import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Adiciona suporte às variáveis que o deploy.yml está enviando
  site: process.env.SITE,
  base: process.env.BASE_PATH,
  vite: {
    plugins: [tailwindcss()]
  }
});
