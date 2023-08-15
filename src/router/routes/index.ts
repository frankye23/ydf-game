
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
        },
      },
      {
        path: '/games',
        component: () => import('@/views/list/index.vue'),
        name: 'games',
        meta: {
          title: 'games',
        },
      },
      {
        path: '/collection',
        component: () => import('@/views/collection/index.vue'),
        name: 'collection',
        meta: {
          title: 'collection',
        },
      },
      {
        path: '/trending',
        component: () => import('@/views/trending/index.vue'),
        name: 'trending',
        meta: {
          title: 'trending',
        },
      },
      {
        path: '/new',
        component: () => import('@/views/new/index.vue'),
        name: 'new',
        meta: {
          title: 'new',
        },
      },
      {
        path: '/guide',
        component: () => import('@/views/guide/index.vue'),
        name: 'guide',
        meta: {
          title: 'guide',
        },
      },
    ],
  },
]