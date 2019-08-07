<template>
    <div class="time_limit">
        <p class="title">限时抢购</p>
        <div class="timer">
            <span class="cyan">00:00</span>
            <span> 专场 </span>
            <span class="hour">{{hour}}</span><span>:</span><span class="miu">{{miu}}</span><span>:</span><span class="sec">{{sec}}</span>
            <span> 抢购中</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .time_limit{
        background:#fff;
        margin-top:0.05rem;
        padding-top:0.15rem;
        .title{
            font-weight: bold;
            text-align:center;
            font-size:0.16rem;
        }
        .timer{
            line-height: 0.24rem;
            text-align:center;
            .cyan{
                color:rgb(12, 240, 240);
            }
            span{
                font-size: 0.12rem;
            }
            .hour,.miu,.sec{
                background: #000;
                color:#fff;
                padding:0.02rem;
            }
        }
    }
</style>
<script>
import { setInterval, clearInterval } from 'timers';
import { parse } from 'querystring';
import { filter } from 'minimatch';
export default {
    data(){
        return {
            total:localStorage.time_limit || "120000",
            hour:"00",
            miu:"00",
            sec:"00",
            timer:"null"
        }
    },
    created(){
        // this.total = localStorage.time_limit 
        this.timer = setInterval(()=>{
            this.hour = this.filter( parseInt((parseInt(this.total) / 3600) % 24));
            this.miu = this.filter(parseInt((parseInt(this.total) / 60) % 60));
            this.sec = this.filter(parseInt(parseInt(this.total) % 60));
            this.total--
            localStorage.time_limit = this.total
            if(this.total === 0){
                clearInterval(this.timer)
            }
        },1000)
    },
    methods:{
        filter(num){
            if(num >= 0 && num <=9){
                return "0" + num;
            }
            return num
        }
    },
    
}
</script>