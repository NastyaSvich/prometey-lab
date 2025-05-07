// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
      resolve: {
        alias: {
          'src': path.resolve('./src'),
          '@styles': path.resolve('./src/styles'),
          '@assets': path.resolve('./src/assets')
        },
      },
    },

  adapter: netlify(),
});