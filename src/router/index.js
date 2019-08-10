import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)  //让vue可以认识vue-router这个插件

// import home from "./home"
// import sort from "./sort"
import eat from "./eat"
// import car from "./car"
import mine from "./mine"
import food from "./food"
import knowledge from "./knowledge"
import life from "./life"
import loveeat from "./loveeat"
import detail from "./detail"
import foot from "./foot"
import centre from "./centre"
import landing from "./landing"
import registe from "./registe"
import product from "./product"; 
import details from "./details";//商品列表页
import detailhtml from "./detailhtml";//商品详情页
import cars from "./cars"



const router =  new Router({
  routes: [
    eat,mine,food,knowledge,life,loveeat,detail,foot,centre,landing,registe,product,details,detailhtml,cars,
    {path:"/", redirect:"/home"},
    {path:"/home", name:"home", component:()=>import("@/views/home/index")},
    // {path:"/group", name:"group", component:()=>import("@/views/group/index")},
    // {path:"/eat", name:"eat", component:()=>import("@/views/Eat/index")},
    // {path:"/cart", name:"cart", component:()=>import("@/views/cart/index")},
    // {path:"/mine", name:"mine", component:()=>import("@/views/mine/index")},
    {path:"/notfound", component:()=>import("@/views/notfound")},
    {path:"*", redirect:"/notfound"}
  ]
})

export default router;
