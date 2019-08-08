import Vue from 'vue' 
import App from './App.vue'
import router from './router'

import "./stylesheets/main.scss"

import {Toast} from "mint-ui"

//引入axios
import axios from "axios"
//在vue上面挂载axios,通过this.$http就可以获取axios这个对象
Vue.prototype.$http = axios;

import {Lazyload,InfiniteScroll} from "mint-ui"
Vue.use(Lazyload);
Vue.use(InfiniteScroll);

Vue.component("mt-header",Toast);
// import "./modules/rem"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
