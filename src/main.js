import Vue from 'vue'
import App from './App.vue'
import VueSyncLocation from './lib/index'
Vue.use(VueSyncLocation)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
