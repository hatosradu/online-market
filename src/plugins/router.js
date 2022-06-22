import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    props: true,
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/cart',
    name: 'CartView',
    component: () => import('../views/CartView.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
