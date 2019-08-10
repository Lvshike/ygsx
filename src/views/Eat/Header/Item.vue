<template>
    <div class="item" @click="clickItem">
        <span ><slot name="photoimg"></slot></span>
        <span class="ft">{{txt}}</span>
    </div>
</template>


<script>
export default {
    props:["txt","mark","sel"], 
    computed:{
    },
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
        height:0.3rem;
        .title{
            font-size: 0.12rem;
            &.active{
                color:#42bd56;
            }
        }
        img{
            width:0.3rem;
            height:0.3rem;
        }
        .ft{
            font-size:0.14rem;
        }
        
    }
</style>