<template>
    <router-link tag="div" class= "item" :to="{name:'detail',params:{id:aa.id}}">
         <div class="head"></div>
         <div class= "imgbox">
            <img :src="aa.img" alt="">
            <span class="smalltit1">生活家</span>
            <span class = "smalltit2"><img src="../../../assets/1.png" alt="" class= "small">&nbsp;{{aa.num}}</span>
         </div>
        <p class="tit1">{{aa.title}}</p>
        <p class="tit2"></p>
        <div class="time">
            <div class="left">
                 <img class = "yiguo" src="../../../assets/153403926162024120_640.jpg" alt="">
                 <span>易果君&nbsp;</span>
            </div>
            <div class="right">
                 <span class="time-new">{{aa.date.year}}年{{aa.date.month}}月{{aa.date.data}}日</span>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
   .item{
       height:2.85rem;
       margin-top:0.45rem;
       .head{
           height:0.05rem;
           background:#f8f8f8;
           width:100%;
       }
       .imgbox{
           display:flex;
           justify-content:center;
           position:relative;
           img{
             width:3.55rem;
             height:1.51rem;
           }
           .smalltit1{
               width:0.52rem;
               height:0.23rem;
               background:#ff6b22;
               border-radius:0 0.15rem 0.15rem 0;
               position:absolute;
               font-size:0.13rem;
               color:#fff;
               top:0.2rem;
               left:0.09rem;
               text-align:center;
               line-height:0.23rem;
           }
           .smalltit2{
                    position: absolute;
                    top: 0.23rem;
                    right: 0.15rem;
                    padding: 0.02rem 0.08rem 0 0.2rem;
                    height: 0.17rem;
                    width:0.7rem;
                    line-height: 0.17rem;
                    background: rgba(255,255,255,.85);
                    border-radius: 0.2rem;
                    text-align: center;
                    color: #656565;
                    font-size: 0.12rem;
                    .small{
                        display:inline-block;
                        width:0.2rem;
                        height:0.14rem;
                        position:absolute;
                        left:0;
                        top:0.027rem;
                        border-radius: 0.2rem;
                    }
           }
       }
       .tit1{
           width:3.55rem;
           height:0.7rem;
            padding: 0.14rem 0 0rem;
            font-size: 0.18rem;
            color: #000;
            line-height: 0.22rem;
            margin-left:0.08rem;
       }
       .tit2{
           width:100%;
           height:0.01rem;
           background:#ccc;
       }
       .time{
           width:3.55rem;
           height:0.57rem;
           .left{
                float:left;
                line-height:0.57rem;
                .yiguo{
                    width:0.34rem;
                    height:0.34rem;
                    float:left;
                    margin-top:0.05rem;
                    margin-left:0.05rem;
                }
                span{
                    display:right;
                    margin-left:0.05rem;
                }
           } 
           .right{
                float:right;
                line-height:0.57rem;
            } 
       }
   }
</style>

<script>
export default {
    props:{
        aa:Object
    }
}
</script>
