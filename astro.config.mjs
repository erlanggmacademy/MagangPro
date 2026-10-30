// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://programmagang.web.id',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [sitemap()]
});