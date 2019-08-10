<template>
    <div class="registe">
        <div>
            <router-link :to="{name:'landing'}" class='fa fa-reply'></router-link>
        </div>
        <div class="tit1" id="tit1">
            <div class="small" id="yzyz">
                <input type="text" placeholder="请输入您的手机号" class="shu">
                <div class="yz">获取验证码</div>
            </div>
        </div>
        <div class="tit1" >
            <div class="small" id="tit2">
                <input type="text" placeholder="请输入您的验证码" class="shu">
            </div>
        </div>
        <div class="tit1">
            <div class="small" id="tit2">
                <input type="text" placeholder="请设定您的密码" class="shu">
            </div>
        </div>
        <div class="tit1" id="tit3">
            <div class="small" id="small">
                <input type="text" placeholder="请再次输入您的密码" class="shu">
            </div>
        </div>
        <div class="tiao">
            <input type="checkbox">
            我已阅读
            <a href=""><<易果服务协议>></a>&nbsp;<a href=""><<隐私条款>></a>并同意
        </div>
        <div class="bigres">
            <div class="smallres">注册</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .registe{
        background:rgb(248,248,248);
        height:6.67rem;
        .fa{
            line-height: 0.4rem;
            font-size:0.2rem;
            margin-left:0.2rem;
        }
        .tit1{
         width:100%;
         height:0.61rem;
         border:none;
         position:relative;
         background:#fff;
         .small{
             width:3.55rem;
             height:0.59rem;
             position:absolute;
                padding-left:0.1rem;
             top:0;
             right:0;
             display:flex;
             align-items:center;
             font-size:16px;
            
            .shu{
                display:inline-block;
                width: 2.25rem;
                height:0.3rem;
                font-size: 16px;
                border: none;
           }
         }
         #yzyz{
             padding:0
         }
         .yz{
             width:0.72rem;
             height:0.34rem;
             font-size:0.12rem;
             background:#008842;
             border-radius:0.04rem;
             text-align:center;
             line-height:0.34rem;
             color:#fff;
             margin-left:0.47rem;

         }
     }
     #tit1{
        margin-right:0.1rem;
        border-top:0.02rem solid #e7e7e7;
    
     }
   
     #tit2{
         margin-right:0.1rem;
         border-top:0.02rem solid #e7e7e7;
     }
     #small{
         margin-right:0.1rem;
         border-top:0.02rem solid #e7e7e7;
     }
     #tit3{
         margin-right:0.1rem;
         border-bottom:0.02rem solid #e7e7e7;
     }
     .tiao{
         font-size:12px;
         width:3rem;
         height:0.16rem;
         margin-left:0.2rem;
         margin-top:0.15rem;
         a{
             color:#008842;
         }
     }
     .bigres{
         width:100%;
         height:0.4rem;
         display:flex;
         justify-content: center;
         margin-top:0.2rem;
         .smallres{
             width:1.98rem;
             height:0.4rem;
             font-size:16px;
             color:#fff;
             background:#008842;
             text-align:center;
             line-height:0.4rem;
             border-radius:0.04rem;
         }
     }
    }

     
</style>


<script>
export default {
    
}
</script>

