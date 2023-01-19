import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue')
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue')
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductCreate.vue')
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: () => import(/* webpackChunkName: "sales" */ '../views/ProductUpdate.vue')
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: () => import(/* webpackChunkName: "sales" */ '../views/SalesList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
