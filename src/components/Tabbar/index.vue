<template>
    <div class = "tabbar">
       
        <Item txt = "首页" mark="home" :sel="selected" :changeSelected="changeSelected"></Item>
        <Item txt = "分类" mark="sort" :sel="selected" :changeSelected="changeSelected"></Item>
        <Item txt = "吃饭吧" mark="eat" :sel="selected" :changeSelected="changeSelected"></Item>
        <Item txt = "购物车" mark="car" :sel="selected" :changeSelected="changeSelected"></Item>
        <Item txt = "我的易果" mark="mine" :sel="selected" :changeSelected="changeSelected"></Item>

    </div>
</template>

<style lang="scss" scoped>
   .tabbar{
       position:fixed;
       width:100%;
       bottom:0;
       left:0;
       height:60px;
       display:flex;
       border-top: 1px solid #ccc;
   }
</style>

<script>
import Item from "./Item"
export default {
    data(){
        return {
            selected:"home"
        }
    },
    methods:{
        changeSelected(val){
            this.selected = val;
        }
    },
    components:{
        Item
    }
}
</script>
