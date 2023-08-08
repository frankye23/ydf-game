import type { Router } from 'vue-router'

const baseTitle = 'ydf-game'

function createPageTitleGuard(router: Router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    pageTitle
      ? (document.title = `${pageTitle} - ${baseTitle}`)
      : (document.title = baseTitle)
  })
}
export function setupRouterGuard(router: Router) {
  createPageTitleGuard(router)
}