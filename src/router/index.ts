import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { baseRoutes } from './routes'
import { setupRouterGuard } from './guard'

const { BASE_URL } = import.meta.env

export const router = createRouter({
  history: createWebHashHistory(BASE_URL),
  routes: baseRoutes,
  scrollBehavior: () => ({ top: 0, left: 0 }),
})

export async function setupRouter(app: App) {
  setupRouterGuard(router)
  app.use(router)
}

export function getRouteNames(routes: RouteRecordRaw[]) {
  return routes.map((route) => getRouteName(route)).flat(1)
}

function getRouteName(route: RouteRecordRaw) {
  const names = [route.name]
  if (route.children && route.children.length) {
    names.push(...route.children.map((item) => getRouteName(item)).flat(1))
  }
  return names
}

export function getNavNames() {
  return baseRoutes.map((route) => getNavRoute(route)).flat(1)
}

function getNavRoute(route: RouteRecordRaw): string[] {
  const names: string[] = []
  if (route.meta?.nav) {
    names.push(route.name as string)
  }

  if (route.children && route.children.length) {
    names.push(...route.children.map((item) => getNavRoute(item)).flat(1))
  }
  return names
}

export function getRouteByName(name: string) {
  return findItemByName(name, baseRoutes)
}

// 通过name查找路由
function findItemByName(name: string, routes: RouteRecordRaw[]): RouteRecordRaw | null {
  for (const route of routes) {
    if (route.name === name) {
      return route
    }
    if (route.children && route.children.length) {
      const found = findItemByName(name, route.children)
      if (found) {
        return found
      }
    }
  }
  return null
}