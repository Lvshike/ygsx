import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Routes from "./router/index"
export default new Router({
  routes: [
    Routes.null,
    Routes.home,
    Routes.group,
    Routes.eat,
    Routes.cart,
    Routes.mine,
  ]
})
