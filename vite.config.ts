import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true,
    proxy: {
      //代理
      "/cityList": {
        target: "https://m.maoyan.com/dianying/cities.json",
        changeOrigin: true,
        rewrite: path => path.replace("/cityList","")
      }
    },
    cors: true
  }
})
