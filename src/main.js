import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'

Vue.use(store)

Vue.config.productionTip = false

import "./stylesheets/main.scss"

// import "./modules/rem"
import {Lazyload,InfiniteScroll} from "mint-ui"

Vue.use(Lazyload);
Vue.use(InfiniteScroll);

import "swiper/dist/css/swiper.min.css"
import axios from "axios"

Vue.prototype.$http = axios;

import { Header } from "mint-ui"
Vue.component("mint-header", Header);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
