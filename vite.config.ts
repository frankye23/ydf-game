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
      proxy: {
        '/api': {
          target: 'http://43.163.235.218:3208/',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    }
  })
}