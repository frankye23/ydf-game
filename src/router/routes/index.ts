
import type { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')

export const baseRoutes: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: 'Home',
          nav: false,
        },
      },
      {
        path: '/games',
        component: () => import('@/views/list/index.vue'),
        name: 'games',
        meta: {
          title: 'games',
          nav: false,
        },
      },
      {
        path: '/collection',
        component: () => import('@/views/collection/index.vue'),
        name: 'collection',
        meta: {
          title: 'collection',
          nav: false,
        },
      },
    ],
  },
]