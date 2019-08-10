export default {
    name:"detailhtml",
    //path:"/product/detail/detailhtml",
    path:"/product/detail/detailhtml/:id",
    component:()=>import("@/views/product/detailhtml"),
    props:true
}