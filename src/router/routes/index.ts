
import type { RouteRecordRaw } from 'vue-router'
// @ts-ignore
const Layout = () => import('@/layout/index.vue')

export const baseRoutes: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        // @ts-ignore
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: 'Home',
          nav: false,
        },
      },
    ],
  },
]