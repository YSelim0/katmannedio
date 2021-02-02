import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Testler from '../views/Testler.vue'
import hangiKatmanKarakterisin from '../views/hangi-katman-karakterisin.vue'
import EmegiGecenler from '../views/EmegiGecenler.vue'

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
  },
  {
    path: '/hangi-katman-karakterisin',
    name: 'hangi-katman-karakterisin',
    component: hangiKatmanKarakterisin
  },
  {
    path: '/emegi-gecenler',
    name: 'EmegiGecenler',
    component: EmegiGecenler
  },
  {
    path: '/ne-kadar-taniyorsun/:name',
    name: 'ne-kadar-taniyorsun',
    component: () => import("../views/ne-kadar-taniyorsun")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
