<template>
    <div class="home-banner swiper-containter">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banners" :key="item.id">
                <img :src="item.img" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<style lang="scss" scoped>
    .home-banner{
        width:100%;
        overflow: hidden;
        position: relative;
        .swiper-slide{
            background:rgb(236, 229, 229);
        }
        img{
            width:100%;
            height:2rem;
        }
    } 
</style>
<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },
    created(){
        this.$http.get("/api/banner_json").then(res=>{
            this.banners = res.data;
            this.$nextTick(()=>{
                new Swiper(".home-banner",{
                    autoplay:{ 
                        disableOnInteraction: false,
                    },
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    },
                    effect : 'fade'
                })  
            })
        }).catch(res=>{
            console.log(res)
        })
    }
}
</script>


