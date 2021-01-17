import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Testler from '../views/Testler.vue'
import hangiKatmanKarakterisin from '../views/hangi-katman-karakterisin.vue'
import EmegiGecenler from '../views/EmegiGecenler.vue'
import batuhanmntyiNeKadarTanıyorsun from '../views/batuhanmntyi-ne-kadar-tanıyorsun.vue'
import hypeNeKadarTanıyorsun from '../views/hype-ne-kadar-tanıyorsun.vue'
import NuribeniNeKadarTanıyorsun from '../views/nuribeni-ne-kadar-tanıyorsun.vue'

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
    path: '/batuhanmntyi-ne-kadar-tanıyorsun',
    name: 'batuhanmntyi-ne-kadar-tanıyorsun',
    component: batuhanmntyiNeKadarTanıyorsun
  },
  {
    path: '/hype-ne-kadar-tanıyorsun',
    name: 'hype-ne-kadar-tanıyorsun',
    component: hypeNeKadarTanıyorsun
  },
  {
    path: '/nuribeni-ne-kadar-tanıyorsun',
    name: 'nuribeni-ne-kadar-tanıyorsun',
    component: NuribeniNeKadarTanıyorsun
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
