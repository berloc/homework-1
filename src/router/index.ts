import { createRouter, createWebHistory } from 'vue-router'
import {requireAuth} from "@/router/guards/requireAuth";
import {requireNoAuth} from "@/router/guards/requireNoAuth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      beforeEnter: requireNoAuth,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login',
    },
  ]
})

export default router
