<template>
    <div class="list-group">
        <div class="lg_box" v-for="item in lgs" :key="item.id">
            <img :src="item.img" alt="">
            <span>{{item.title}}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .list-group{
        display:flex;
        flex-flow: wrap;
        justify-content: space-around;
        .lg_box{
            width:0.6rem;
            margin: 0.05rem 0.1rem;
            display:flex;
            flex-flow: column;
            align-items: center;
            img{
                width: 100%;
            }
            span{
                font-size:0.12rem;
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            lgs:[]
        }
    },
    created(){
        this.$http.get("/api/list_group").then((res)=>{
            this.lgs = res.data
            console.log(res)
        })
    }
}
</script>

