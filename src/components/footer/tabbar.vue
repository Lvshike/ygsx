<template>
    <router-link tag="div" :to="name" class="tabbar">
        <slot name="icon-normal" v-if="mark != name"></slot>
        <slot name="icon-active" v-else></slot>
        <span :class="(mark == name)?'active':''">{{txt}}</span>
    </router-link>
</template>
<style lang="scss" scoped>
    .tabbar{
        color:#ccc;
        display: flex;
        flex-flow:column; 
        justify-content:space-around;
        align-items: center;
        span{
            color:rgb(102, 98, 98)
        }
        .active{
            color:rgb(89, 202, 54)
        }
    }
</style>

<script>
export default {
     props:{
            txt:String,
            mark:String,
            name:String,
            getMark:Function
        },
}
</script>
