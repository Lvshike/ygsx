import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import product from "./product"; 
import detail from "./detail";//商品列表页
import detailhtml from "./detailhtml";//商品详情页
import cars from "./cars"
export default new Router({
  routes: [
    {path:"/",redirect:"/"},
    
    product,detail,detailhtml,cars
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: CategoryList
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
