<template>
    <div class="foot">

        <div class="left">
             <i :class="['fa', 'fa-' + (flag?'heart-o':'heart') ]" @click="chr" id="aixin"></i>&nbsp;
             <span class="num">421</span>
        </div>
        <div class="right" @click="tanchuang">
            相关商品
        </div>
    </div>
</template>

<script>
import {Toast} from "mint-ui"; 
export default {
    data(){
        return {
            flag:true
        }
    },
    methods:{
        tanchuang(){
            Toast({
                message: 'Upload Complete',
                position: 'bottom',
                duration: 5000
            });
        },
        chr(){
            this.flag = !this.flag
        }
    }
}
</script>
<style lang="scss" scoped> 
    .foot{
        width:3.75rem;
        height:0.5rem;
        background:rgb(221, 213, 213);
        position:fixed;
        bottom:0;
        left:0;
        .fa{
            font-size:0.2rem;
        }
        .fa-heart{
            color: rgb(226, 29, 29)
        }
        .left{
            float:left;
            width:68%;
            height:0.5rem;
            line-height:0.5rem;
            #aixin{
                margin-left:0.3rem;
                margin-top:0.1rem;
            }
            .num{
                width:0.24rem;
                height:0.16rem;
                margin-top:0.1rem;
                color:black;
            }
      
       
        }
        .right{
            float:right;
            width:32%;
            height:0.5rem;
            padding: 0 0.3rem;
            background: rgb(219, 55, 55);
            line-height: 50px;
            height: 100%;
            color: #fff;
            font-size: 15px;
           
        }
    }
</style>


