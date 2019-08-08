<template>
    <div class = "eat">
        
       <Header></Header>
       <Goodsbox></Goodsbox>
    
    </div> 
</template>

<script>
import Header from "./Header"
import Goodsbox from "./Goodsbox"
import {Toast} from 'mint-ui';

export default {
     components:{
         Header,
         Goodsbox
     },
     methods:{
          
     }
}
</script>

<style lang="scss" scoped>

 
</style>
