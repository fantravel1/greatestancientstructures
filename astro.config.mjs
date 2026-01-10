import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fantravel1.github.io',
  base: '/greatestancientstructures',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
