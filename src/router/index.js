import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Testler from '../views/Testler.vue'
import hangiKatmanKarakterisin from '../views/hangi-katman-karakterisin.vue'
import EmegiGecenler from '../views/EmegiGecenler.vue'
import batuhanmntyiNeKadarTaniyorsun from '../views/batuhanmntyi-ne-kadar-taniyorsun.vue'
import hypeNeKadarTaniyorsun from '../views/hype-ne-kadar-taniyorsun.vue'
import NuribeniNeKadarTaniyorsun from '../views/nuribeni-ne-kadar-taniyorsun.vue'

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
    path: '/batuhanmntyi-ne-kadar-taniyorsun',
    name: 'batuhanmntyi-ne-kadar-taniyorsun',
    component: batuhanmntyiNeKadarTaniyorsun
  },
  {
    path: '/hype-ne-kadar-taniyorsun',
    name: 'hype-ne-kadar-taniyorsun',
    component: hypeNeKadarTaniyorsun
  },
  {
    path: '/nuribeni-ne-kadar-taniyorsun',
    name: 'nuribeni-ne-kadar-taniyorsun',
    component: NuribeniNeKadarTaniyorsun
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
