<template>
    <div class = "life">
        <goback></goback>
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
import goback from "../Goodsbox/goback"
export default {
    components:{
        item,goback
    },
     data(){
        return {
            eatdata:[],
        }
    },
    created(){
        this.$http.get("/api/eat_data").then(res=>{
            this.eatdata = res.data;
        })
    }
}
</script>
