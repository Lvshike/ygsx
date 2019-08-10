<template>
    <router-link tag="div" class= "item" :to="{name:'detail',params:{}}">
        
         <div class= "imgbox">
            <img src="../../../assets/153403926162187960_900x383.jpg" alt="">
            <span class="smalltit1">生活家</span>
            <span class = "smalltit2"><img src="../../../assets/2.png" alt="" class= "small">上海</span>
         </div>
        <p class="tit1">端午送礼|带上五芳斋粽子，分享幸福的滋味！</p>
       
        <div class="time">
            <div class="left">
                 <img class = "yiguo" src="../../../assets/153403926162024120_640.jpg" alt="">
                 <span>易果君&nbsp;</span>
            </div>
            <div class="right">
                 <span class="time-new">2019年05月24日</span>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
   .item{
       height:2.85rem;
        margin-top:0.4rem;
       .imgbox{
           display:flex;
           justify-content:center;
           position:relative;
           img{
             width:100%;
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
               left:0rem;
               text-align:center;
               line-height:0.23rem;
           }
           .smalltit2{
                    position: absolute;
                    top: 0.23rem;
                    right: 0.15rem;
                    padding: 0.02rem 0.08rem 0 0.2rem;
                    height: 0.2rem;
                    width:0.6rem;
                    line-height: 0.17rem;
                    background: rgba(255,255,255,.85);
                    border-radius: 0.2rem;
                    text-align: center;
                    color: #656565;
                    font-size: 0.12rem;
                    .small{
                        display:inline-block;
                        width:0.13rem;
                        height:0.14rem;
                        position:absolute;
                        left:0.07rem;
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
    
}
</script>
