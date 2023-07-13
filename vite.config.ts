import { defineConfig } from 'vite'
import path from 'path'
import mkcert from 'vite-plugin-mkcert'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    server: {
        host: true,
        https: true,
    },
    plugins: [
        mkcert(),
        vue()
    ],
})
