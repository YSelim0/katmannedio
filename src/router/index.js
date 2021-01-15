import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Testler from '../views/Testler.vue'
import hangiKatmanKarakterisin from '../views/hangi-katman-karakterisin.vue'
import Ekip from '../views/Ekip.vue'

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
    path: '/ekip',
    name: 'Ekip',
    component: Ekip
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
