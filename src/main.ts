import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupAssets } from '@/plugins'

import('preline')

import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  // setup store
  // setupStore(app)

  // setup assets
  setupAssets(app)

  // setup router
  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
