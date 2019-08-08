import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)  //让vue可以认识vue-router这个插件

import home from "./home"
import sort from "./sort"
import eat from "./eat"
import car from "./car"
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



const router =  new Router({
  routes: [
    home,sort,eat,car,mine,food,knowledge,life,loveeat,detail,foot,centre,landing,registe,
  ]
})

export default router;
