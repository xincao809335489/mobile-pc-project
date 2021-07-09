/*
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2021-07-08 10:42:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-08 17:56:41
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/terminal',
    name: 'terminal',
    component: () =>
      import(/* webpackChunkName: "about" */ 'views/terminal/index.vue')
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () =>
      import(/* webpackChunkName: "about" */ 'views/mobile/index.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ 'views/mobile/detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
