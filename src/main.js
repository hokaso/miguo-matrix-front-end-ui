import Vue from 'vue'
import 'normalize.css/normalize.css' // CSS重置的现代替代方法

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

import '@/icons' // 图标

import getPageTitle from '@/utils/get-page-title'
// import 'lib-flexible'
// import '@/utils/rem'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach(async(to, from, next) => {

  document.title = getPageTitle(to.meta.title)

  next()

})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
