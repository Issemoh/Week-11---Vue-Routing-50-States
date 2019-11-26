import Vue from 'vue'
import App from './App.vue'

import VueRooter from 'vue-router'
import router from './router'


import BootstrapVue from 'bootstrap-vue'
import StateAPIServices from '@/services/stateService'


Vue.use(VueRooter) 

// configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$stateService = StateAPIServices

new Vue({
  render: h => h(App),
  router 
}).$mount('#app')
