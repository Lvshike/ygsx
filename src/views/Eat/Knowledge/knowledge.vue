<template>
    <div class = "knowledge">
        <goback></goback>
      <item
        v-for="aa in eatdata"
        :key="aa.id"
        :aa="aa"
        ></item>
    </div>
</template>

<style>


</style>

<script>
import item from "./item"
import goback from "../Goodsbox/goback"
export default {
    data(){
        return {
            eatdata:[],
        }
    },
   components:{
        item, goback
    },
    created(){
        this.$http.get("/api/eat_data").then(res=>{
            this.eatdata = res.data;
        })
    }

}
</script>
