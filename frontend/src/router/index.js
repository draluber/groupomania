import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/profil.vue')
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: () => import('../views/inscription.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
