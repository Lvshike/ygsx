<template>
    <div class="landing">
        <div>
            <router-link to="/mine" class='fa fa-reply'></router-link>
        </div>
        <div class="tit1">
            <div class="small">
                <span><img src="../../assets/icon_username.png" alt=""></span>
                <input type="text" placeholder="请输入您的用户名" class="shu">
            </div>
        </div>
        <div class="tit1" id="tit2">
            <div class="small" id="small">
                <span><img src="../../assets/icon_password.png" alt=""></span>
                <input type="text" placeholder="请输入您的密码" class="shu">
            </div>
        </div>
        <div class="tit2">
            <input type="text" placeholder="请输入验证码" class="sh">
        </div>
         <div class="pass">
            <a href="">忘记密码？</a>
        </div>
        <div class="reg">
            <div class="one">登录</div>
            <router-link tag="div" :to="{name:'registe'}" class="two">立即注册</router-link>
        </div>
        <div class="foot">
            <img src="../../assets/yiguo_logo.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .landing{
        background:rgb(248,248,248);
        height:6.67rem;
        position: relative;
         .fa{
            line-height: 0.4rem;
            font-size:0.2rem;
            margin-left:0.2rem;
        }
        .tit1{
         width:100%;
         height:0.61rem;
         border-top:0.02rem solid #e7e7e7;
         position:relative;
         background:#fff;
         
         .small{
             width:3.55rem;
             height:0.59rem;
             position:absolute;
             top:0;
             right:0;
             border-bottom:0.02rem solid #e7e7e7;
             display:flex;
             align-items:center;
            span{
                 float:left;
                 width:0.18rem;
                 height:0.2rem;
                    img{
                        width:100%;
                        height:100%;
                    }
            }
            .shu{
                display:inline-block;
                width: 2.25rem;
                height:0.3rem;
                font-size: 16px;
                border: none;
                margin-left:0.2rem;
           }
         }
       
     }
     .tit2{
         width:100%;
         height:0.61rem;
         border-bottom:0.02rem solid #e7e7e7;
         display:flex;
         align-items:center;
           background:#fff;
         span{
             float:left;
             margin-left:0.2rem;
             width:0.18rem;
             height:0.2rem;
             img{
                 width:100%;
                 height:100%;
             }
         }
         .shu{
             display:inline-block;
             width: 2.25rem;
             height:0.3rem;
             font-size: 16px;
             border: none;
             margin-left:0.2rem;
         }
         .sh{
             display:inline-block;
             width: 2.25rem;
             height:0.3rem;
             font-size: 16px;
             border: none;
             margin-left:0.7rem;
         }
     }
     #tit2{
         border:none;
         margin-top:0;
           background:#fff;
          #small{
           border-bottom:0.02rem solid #e7e7e7; 
         }
     }
    }
    .pass{
        width:100%;
        height:0.2rem;
        margin-top:0.2rem;
         
        a{
             color: #008842;
             font-size: 15px;
             margin-left:0.2rem;
        }   
    }
    .reg{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        div{
            width: 1.41rem;
            height:0.4rem;
            border:0.01rem solid #008842;
            text-align:center;
            line-height:0.4rem;
             border-radius: 4px;
           font-size: 16px;
           margin-top:0.2rem;
        }
        .one{
                color: #fff;
    background: #008842;
        }
    }
    .foot{
        width:0.9rem;
        height:0.35rem;
        position:absolute;
        bottom:0.3rem;
        left:43%;
        img{
            width:100%;
            height:100%;
        }
    }
     
</style>


<script>
export default {
    
}
</script>
