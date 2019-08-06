export default {
    null:{path:"/",redirect:"/home"},
    home:{
        name:"home",
        path:"/home",
        component:()=>import ("@/views/home/index")
    },
    group:{
        name:"group",
        path:"/group",
        component:()=>import ("@/views/group/index")
    },
    eat:{
        name:"eat",
        path:"/eat",
        component:()=>import ("@/views/eat/index")
    },
    cart:{
        name:"cart",
        path:"/cart",
        component:()=>import ("@/views/cart/index")
    },
    mine:{
        name:"mine",
        path:"/mine",
        component:()=>import ("@/views/mine/index")
    },
}