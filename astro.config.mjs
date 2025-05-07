// @ts-check
import {defineConfig} from 'astro/config';
import path from 'path';

export default defineConfig({
    outDir: process.env.BUILD_DIR || 'dist',
    base: '/prometey-lab/',
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
