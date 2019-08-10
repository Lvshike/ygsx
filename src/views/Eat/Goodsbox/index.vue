<template>
    <div 
        class= "index"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <div>
            <item v-for="aa in eatdata" :key="aa.id" :aa="aa">

            </item>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .index{
      margin-top:0.6rem;
      height: 100%;
      overflow-y: auto;
  }
</style>

<script>
import item from "./item"
import { Toast } from 'mint-ui';
export default {
    methods:{
         loadMore(){
             if(!this.hasMore){
                 Toast({
                    message:'我是有底线的....',  //默认位置是中间
                    position:"bottom",
                    duration:1000
                })
                this.loading = true;
                return false;
             }
              this.getaa()
         },
         getaa(){
             let instance =Toast({
                message:'正在加载中',
                iconClass:'fa fa-cog fa-spin',
                duration:-1
             });
            this.loading = true;
            this.$http.get("/api/eat_data").then(res=>{
                instance.close();
                this.loading = false;
                this.eatdata = res.data;
                this.hasMore = !(this.eatdata.length >= res.data.total)
            })
         }
    },
    components:{
        item
    },
    data(){
        return {
            eatdata:[],
            hasMore:true
        }
    },
   

}
</script>
