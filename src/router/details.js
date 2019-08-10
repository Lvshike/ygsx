export default {
    name:"details",
    path:"/product/details/id=:id",
    component:()=>import("@/views/product/detail"),
    props:true
}