import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            //这里猜测应该是一个map，key为别名，value为你要别名的路径
            '@': path.resolve(__dirname, 'src'),
            '@img': path.resolve(__dirname, 'src/assets/imgs'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: '8888'
    },
})
