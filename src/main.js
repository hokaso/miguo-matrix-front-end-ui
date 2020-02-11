import Vue from 'vue'
import 'normalize.css/normalize.css' // CSS重置的现代替代方法

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import store from './store'
import router from './router'

import '@/icons' // 图标

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
