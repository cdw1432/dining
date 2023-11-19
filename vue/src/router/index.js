import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dlg',
      name: 'dlg',
      component: () => import('../views/DLGView.vue')
    },
    {
      path: '/carrillo',
      name: 'carrillo',
      component: () => import('../views/CarrilloView.vue')
    },
    {
      path: '/portola',
      name: 'portaola',
      component: () => import('../views/PortolaView.vue')
    }
  ]
})

export default router
