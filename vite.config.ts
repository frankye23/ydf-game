import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {

      },
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    server: {
      port: 1600,
      proxy: {
        '/api': {
          target: 'https://api.ydf.life/',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    }
  })
}