<template>
    <div class="dysp">
        <div class="img_box" v-for="item in lists" :key="item.id">
            <img :src="item.img" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .dysp{
        .img_box{
            img{
                width: 100%;
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            lists:[]
        }
    },
    created(){
        this.$http.get("api/day_sp").then((res)=>{
            this.lists = res.data
        })
    }
}
</script>


