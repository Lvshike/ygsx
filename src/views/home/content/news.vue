<template>
    <div class="swiper-container news">
       <div class="swiper-wrapper txt_box">
            <p class="swiper-slide" v-for="item in news" :key="item.id">{{item.msg}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .news{
        height:0.33rem;
        background:#fff url(../../../assets/news.png) no-repeat 0.16rem center;
        background-size:0.8rem;
        padding:.08rem .1rem .08rem 1.3rem;
        .txt_box{
            span{
                font-size:0.16rem;
            }
        }
    }
</style>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            news:[
                // {id:"0", msg:'不良信息投诉与举报'},
                // {id:"1", msg:'现在可用农行信用卡积分抵现啦！'},
                {id:"2", msg:'营业资质公示，详情请点击查询'},
            ]
        }
    },
    created(){
        new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop:true
        })
    }

}
</script>

