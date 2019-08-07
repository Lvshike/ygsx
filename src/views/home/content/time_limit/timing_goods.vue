<template>
    <div class="goods_box">
        <div class="time_limit">
            <div class="good_item" v-for="item in timers" :key="item.id">
                <img :src="item.img" alt="">
                <span>{{item.title}}</span>
                <p class="font">
                    <span class="np">¥{{item.nprice}}</span>
                    <span>/</span>
                    <span>{{item.num}}</span>
                    <span class="op">¥{{item.oprice}}</span>
                </p>
            </div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>
    .goods_box{
        height:1.62rem;
        overflow-y:hidden;
        padding-left:0.1rem;
        .time_limit{
            display:flex;
            flex-flow: nowrap;
            overflow-x: scroll;
            // overflow-y:hidden;
            background: #fff;
            height:115%;
            .good_item{
                width:1.05rem;
                flex-shrink: 0;
                font-size:0.12rem;
                margin:0 0.05rem;
                
                .font{
                    font-family: 'Times New Roman';
                    .np{
                        color:rgb(233, 24, 24)
                    }
                    .op{
                        margin-left:0.15rem;
                        text-decoration: line-through
                    }
                }
                >span{
                    display: block;
                    width:100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size:0.12rem;
                    line-height: 0.2rem;

                }
                img{
                    width:100%
                }
            }
        }
    }
</style>
<script>
import { constants } from 'crypto';
export default {
    data(){
        return {
            timers:[]
        }
    },
    created(){
        this.$http.get("/api/time_limit").then((res)=>{
            this.timers = res.data
        })
    }
}
</script>