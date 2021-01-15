import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Testler from '../views/Testler.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testler',
    name: 'Testler',
    component: Testler
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
