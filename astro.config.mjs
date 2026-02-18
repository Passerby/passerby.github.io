import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://passerby.github.io',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'shiki'
  },
  vite: {
    // AstroPaper-style Tailwind v4 integration
    // @ts-ignore
    plugins: [tailwindcss()]
  }
});
