<template>
    <div class="footer">
        <tabbar txt="首页" name="home" :mark="sym" :getSym="getSym">
            <i slot="icon-normal" class="iconfont">&#xe686;</i>
            <i slot="icon-active" class="iconfont active">&#xe641;</i>
        </tabbar>
        <tabbar txt="分类" name="group" :mark="sym" :getSym="getSym">
            <i slot="icon-normal" class="iconfont">&#xe65e;</i>
            <i slot="icon-active" class="iconfont active">&#xe6c4;</i>
        </tabbar>
        <tabbar txt="吃饭吧" name="eat" :mark="sym" :getSym="getSym">
            <i slot="icon-normal" class="iconfont">&#xe642;</i>
            <i slot="icon-active" class="iconfont active">&#xe642;</i>
        </tabbar>
        <tabbar txt="购物车" name="cart" :mark="sym" :getSym="getSym">
            <i slot="icon-normal" class="iconfont">&#xe603;</i>
            <i slot="icon-active" class="iconfont active">&#xe606;</i>
        </tabbar>
        <tabbar txt="我的" name="mine" :mark="sym" :getSym="getSym">
            <i slot="icon-normal" class="iconfont">&#xe62b;</i>
            <i slot="icon-active" class="iconfont active">&#xe61e;</i>
        </tabbar>
    </div>
</template>
<style lang="scss" scoped>
    .footer{
        display: flex;
        justify-content: space-around;
        width:100%;
        height:0.59rem;
        background:#fff;
        position: fixed;
        bottom: 0;
        left:0;
        .iconfont{
            font-size: 0.3rem;
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
            sym:this.$route.name
        }
    },
    components:{
        tabbar,
    },
    methods:{
        getSym(val){
            this.sym = val
        }
    },
}
</script>
