<template>
    <div class = "eatheaderitem">
        <item
          v-for="item in headers"
          :key="item.id"
          :txt="item.txt"
          :mark="item.mark"
          :sel="selected"
        >
               <img slot = "photoimg" :src="item.photoimg" alt="">
              
        </item>
         <img src="../../../assets/new.png" alt="" class="new">
    </div>
</template>

<style lang="scss" scoped>
    .eatheaderitem{
         width:100%;
        //  height:0.5rem;
         display:flex;
         position:fixed;
         top:0;
         z-index: 12;
         background: rgb(243, 240, 240);
         justify-content: space-around;
         .item{
             width:0.7rem;
             height:0.5rem;
             margin-top:0.05rem;
         }
   }
   img{
       width:0.4rem;
       height:0.32rem;
   }
   .new{
       position:absolute;
       width:0.3rem;
       height:0.23rem;
       top:0.02rem;
      right:1.05rem;
   }
</style>

<script>
import Item from "./Item"

export default {
   data(){
      return {
         selected:this.$route.name,
         headers:[
              {id:1,txt:"做美食",mark:"food",photoimg:require("../../../assets/586030925119660372_120x96.png")},
               {id:2,txt:"涨知识",mark:"knowledge",photoimg:require("../../../assets/586030925119693140_120x96.png")},
                {id:3,txt:"生活家",mark:"life",photoimg:require("../../../assets/586030925119725908_120x96.png")},
                 {id:4,txt:"爱试吃",mark:"loveeat",photoimg:require("../../../assets/586030927703745073_120x96.png")},
               
         ]
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
