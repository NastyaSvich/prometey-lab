import {defineConfig} from 'astro/config';
import path from 'path';
import relativeLinks from 'astro-relative-links';

export default defineConfig({
    outDir: 'build/dist',
    integrations: [relativeLinks()],
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
