<template>
    <div class = "mine">
        <div class="header">
           <img src="../../assets/11.jpg" alt="" class="tubiao">
           <img src="../../assets/19.png" alt="" class="setup">
            <router-link :to="{name:'landing'}" class="registe ">登录/注册</router-link>
        </div>
        <div class="tit1">
            <dl class="left">
                <dt>-</dt>
                <dd>卡包余额</dd>
            </dl>
            <dl class="left">
                <dt>-</dt>
                <dd>悠币</dd>
            </dl>
        </div>
        <div class="tit2">
            <dl class="small">
                <dt class="photo"><img src="../../assets/21.png" alt=""></dt>
                <dd>待支付</dd>
            </dl>
            <dl class="small">
                <dt class="photo"><img src="../../assets/20.png" alt=""></dt>
                <dd>待收货</dd>
            </dl>
            <dl class="small">
                <dt class="photo"><img src="../../assets/12.png" alt=""></dt>
                <dd>评价送悠币</dd>
            </dl>
            <dl class="small">
                <dt class="photo"><img src="../../assets/14.png" alt=""></dt>
                <dd>在线退换货</dd>
            </dl>
            <dl class="small">
                <dt class="photo"><img src="../../assets/18.png" alt=""></dt>
                <dd>全部订单</dd>
            </dl>
        </div>
        <div class="tit3">
           <div class="top">
                 <dl class="topsmall">
                     <dt class="photo"><img src="../../assets/23.png" alt=""></dt>
                     <dd>优惠券</dd>
                </dl>
                <dl class="topsmall">
                     <dt class="photo"><img src="../../assets/16.png" alt=""></dt>
                     <dd>储值卡</dd>
                </dl>
                <dl class="topsmall">
                     <dt class="photo"><img src="../../assets/24.png" alt=""></dt>
                     <dd>礼品兑换券</dd>
                </dl>
                <dl class="topsmall">
                     <dt class="photo"><img src="../../assets/22.png" alt=""></dt>
                     <dd>收货地址</dd>
                </dl>
           </div>
           <div class="center"></div>
           <div class="bottom">
              <dl class="bottomsmall">
                     <dt class="photo"><img src="../../assets/22.png" alt=""></dt>
                     <dd>帮助中心</dd>
                </dl>
                <dl class="bottomsmall">
                     <dt class="photo"><img src="../../assets/10.png" alt=""></dt>
                     <dd>我的团购</dd>
                </dl>
                <dl class="bottomsmall">
                     <dt class="photo"><img src="../../assets/17.png" alt=""></dt>
                     <dd>账户余额</dd>
                </dl>
                <dl class="bottomsmall">
                     <dt class="photo"><img src="../../assets/26.png" alt=""></dt>
                     <dd>在线客服</dd>
                </dl>
           </div>
        </div>
       
       <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
     components:{
        Tabbar
   }
}
</script>

<style lang="scss" scoped>
  .mine{
    background:rgb(244,244,244);  
    height:6.67rem;
     .header{
       background:url(../../assets/13.jpg);
       width:100%;
       height:1.34rem;
       position:relative;
       .tubiao{
          width: 0.68rem;
          height:0.68rem;
          border-radius: 50%;
          position:absolute;
          top:0.35rem;
          left:0.25rem;
       }
       .setup{
           width:0.165rem;
           height:0.185rem;
           position:absolute;
           top:0.1rem;
           right:0.1rem;
       }
        .registe{
            position:absolute;
            top:0.6rem;
            left:1.2rem;
            font-size:0.14rem;
            color:#fff;
        }
    }
    .tit1{
        width:100%;
        height:0.53rem;
        overflow:hidden;
         background:white;
        .left{
            float:left;
            width:50%;
            height:0.53rem;
            text-align:center;
            display:flex;
            flex-direction:column;
        }
        .right{
            float:right;
            width:50%;
            height:0.53rem;
            text-align:center;
            line-height:0.3rem;
            display:flex;
            flex-direction:column;
            color:lime;
        }
    }
    .tit2{
        width:100%;
        height:0.81rem;
        margin-top:0.09rem;
        display:flex;
        flex-direction: row;
        background:white;
        .small{
            width:20%;
            height:0.81rem;
            display:flex;
            flex-direction:column;
            align-items:center;
         
            justify-content: center;
            
            .photo{
                width:0.23rem;
                height:0.16rem;
                margin-bottom:0.04rem;
                img{
                    width:100%;
                    height:100%;
                  
                }
            }
        }
    }
    .tit3{
        width:100%;
        height:1.65rem;
        background:white;
        margin-top:0.09rem;
        display:flex;
        flex-direction:column;
        .top{
            width:100%;
            height:0.815rem;
            display:flex;
             flex-direction: row;
                .topsmall{
            width:25%;
            height:0.815rem;
            display:flex;
            flex-direction:column;
            align-items:center;
         
            justify-content: center;
            
            .photo{
                width:0.33rem;
                height:0.33rem;
                margin-bottom:0.04rem;
                img{
                    width:100%;
                    height:100%;
                  
                }
            }
        }
        }
        .center{
            width:100%;
            height:0.02rem;
             background:rgb(244,244,244);  
        }
        .bottom{
           
            width:100%;
            height:0.815rem;
            display:flex;
             flex-direction: row;
                        .bottomsmall{
            width:25%;
            height:0.815rem;
            display:flex;
            flex-direction:column;
            align-items:center;
         
            justify-content: center;
            
            .photo{
                width:0.33rem;
                height:0.33rem;
                margin-bottom:0.04rem;
                img{
                    width:100%;
                    height:100%;
                  
                }
            }
        }
        }

    }
  }
    
</style>
