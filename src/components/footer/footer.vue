<template>
    <div class="footer">
        <tabbar :txt="item.txt" :name="item.name" :mark="mark"  v-for="item in list" :key="item.id">
            <div slot="icon-normal" :class="['iconfont', item.normal]"></div>
            <div slot="icon-active" :class="['iconfont', 'active', item.active]"></div>
        </tabbar>
    </div>
</template>
<style lang="scss" scoped>
    .footer{
        display: flex;
        justify-content: space-around;
        width:100%;
        height:0.49rem;
        background:#fff;
        position: fixed;
        bottom: 0;
        left:0;
        border-top: 1px solid #ccc;
        .iconfont{
            font-size: 0.2rem;
            color:rgb(102, 98, 98)
        }
        .active{
            color:rgb(89, 202, 54)
        }
    }
</style>
<script>
import tabbar from "./tabbar"
export default {
    data(){
        return {
            mark:this.$route.name,
            list:[
                    {id:"0", txt:"首页", name:"home", normal:"icon-home-link", active:"icon-home2f"},
                    {id:"1", txt:"分类", name:"product", normal:"icon-fenlei", active:"icon-sortfenlei"},
                    {id:"2", txt:"吃饭吧", name:"eat", normal:"icon-huoguo ", active:"icon-huoguo "},
                    {id:"3", txt:"购物车", name:"cars", normal:"icon-icon01 ", active:"icon-gouwuche "},
                    {id:"4", txt:"我的", name:"mine", normal:"icon-wode ", active:"icon-wode2"},
                ]
        }
    },
    components:{
        tabbar,
    }
}
</script>
