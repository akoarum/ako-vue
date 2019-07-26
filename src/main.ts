import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import windowSize from './plugins/windowSize'

Vue.config.productionTip = false
Vue.use(windowSize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
