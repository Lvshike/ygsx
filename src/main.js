import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./stylesheets/main.scss"

import "swiper/dist/css/swiper.min.css"
import axios from "axios"

Vue.prototype.$http = axios;
// Vue.filter("timer", (num)=>{
  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
