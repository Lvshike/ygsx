<template>
    <div class = "eat">
       <Header></Header>
       <Goodsbox></Goodsbox>
       <backtop :flag="flag"></backtop>
       <gohome></gohome>
    </div> 
</template>

<script>
import Header from "./Header"
import Goodsbox from "./Goodsbox"
import {Toast} from 'mint-ui';
import backtop from "../home/backTop"
import gohome from "./gohome"
export default {
     data(){
        return {
            top:"0",
            flag:false
        }
    },
     components:{
         Header, Goodsbox, backtop, gohome
     },
    methods:{
        scr(e){
            var top = document.documentElement.scrollTop||document.body.scrollTop;
            if(top>=400 && !this.flag){
                this.flag = true;
            }else if(top < 400 && this.flag){
                this.flag = false;
            }
        }
    },
    created(){
        window.scrollTo(0, this.top)
        window.addEventListener("scroll", this.scr)
    },
    beforeDestroy(){
         window.removeEventListener("scroll", this.scr)
    }
}
</script>

<style lang="scss" scoped>

 
</style>
