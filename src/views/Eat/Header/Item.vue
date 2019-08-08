<template>
    <div class="item" @click="clickItem">
        <span ><slot name="photoimg"></slot></span>
        <span >{{txt}}</span>
    </div>
</template>


<script>
export default {
    props:["txt","mark","sel"], //接受父组件传递来的属性txt
    computed:{
    },
    // created(){
    //    console.log(this)
    // },
    methods:{
        clickItem(){
            console.log(this)
            this.$router.push("/"+this.mark)
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:0.70rem;
        height:0.5rem;
        .title{
            font-size: 0.12rem;
            &.active{
                color:#42bd56;
            }
        }
        img{
            width:0.4rem;
            height:0.4rem;
        }
        
    }
</style>