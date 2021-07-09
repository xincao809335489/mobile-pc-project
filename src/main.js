/*
 * @Descripttion:
 * @version:
 * @Author: congsir
 * @Date: 2021-07-08 10:42:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-08 17:06:31
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mata适配移动端
import Meta from 'vue-meta'
// 适配移动rem单位
import 'assets/js/rem.js'
Vue.use(Meta)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
