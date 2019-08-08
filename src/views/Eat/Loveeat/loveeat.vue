<template>
    <div class = "loveeat">
       <item
        v-for="aa in eatdata"
        :key="aa.id"
        :aa="aa"
        ></item>
    </div>
</template>

<style lang="scss" scoped>
   
</style>

<script>
import item from "./item"
export default {
     components:{
        item
    },
     data(){
        return {
            eatdata:[],
        }
    },
    created(){
        this.$http.get("/api/api/eat_data").then(res=>{
            this.eatdata = res.data;
        })
    }
}
</script>
