import {defineConfig} from 'astro/config';
import path from 'path';
import relativeLinks from 'astro-relative-links';
import { loadEnv } from "vite";

import sitemap from '@astrojs/sitemap';

const { PUBLIC_APP_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
export default defineConfig({
    site: PUBLIC_APP_URL,
    outDir: 'build/dist',
    integrations: [relativeLinks(), sitemap()],
    vite: {
        resolve: {
            alias: {
                src: path.resolve('./src'),
                '@styles': path.resolve('./src/styles'),
                '@assets': path.resolve('./src/assets'),
            },
        },
    },
});