import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-codestitch-starter.com',
  integrations: [icon(), sitemap(), robotsTxt(), tailwind(), alpinejs({
    entrypoint: 'src/alpine.ts',
  })],
});
