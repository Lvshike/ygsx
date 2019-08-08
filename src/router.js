import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Routes from "./router/index"
export default new Router({
  routes: [
    {path:"/", redirect:"/home"},
    {path:"/home", name:"home", component:()=>import("@/views/home/index")},
    {path:"/group", name:"group", component:()=>import("@/views/group/index")},
    {path:"/eat", name:"eat", component:()=>import("@/views/eat/index")},
    {path:"/cart", name:"cart", component:()=>import("@/views/cart/index")},
    {path:"/mine", name:"mine", component:()=>import("@/views/mine/index")},
    {path:"/notfound", component:()=>import("@/views/notfound")},
    {path:"*", redirect:"/notfound"}
  ]
})
