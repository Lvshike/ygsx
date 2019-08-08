import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './vuex'
import axios from 'axios'
import './modules/rem'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(store)

import { Header } from "mint-ui"
Vue.component("mint-header", Header);

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
