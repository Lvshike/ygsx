<template>
    <div class="display">
        <div class="cont_box">
            <p class="title">- 热卖水果 -</p>
            <dl v-for="item in gds" :key="item.id">
                <dt>
                    <img :src="item.img" alt="">
                </dt>
                <dd class="bold">{{item.title}}</dd>
                <dd>
                    <span class="fir">¥ {{item.price}}/</span>
                    <span>{{item.num}}</span>
                    <span class="cart"></span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .display{
        background:#fff;
        // margin-bottom:0.1rem;
        .cont_box{
            overflow: hidden;
            .title{
                width:100%;
                text-align: center;
                font-weight: bold;
                padding:0.1rem 0;
            }
            dl{
                width:43%;
                box-shadow: 1px 1px 0.05rem #eeeaea;
                float: left;
                border:1px solid #eeeaea;
                margin:0.05rem 0.075rem 0.05rem 0.15rem;
                background:#fff;
                border-radius:0.08rem;
                dt{
                    img{
                        width:100%;
                    }
                }
                .bold{
                    font-weight: bold;
                }
                dd{
                    line-height: 0.3rem;
                    padding-left:0.15rem;
                    .fir{
                        color:red;
                    }
                    .cart{
                        background:url("../../../assets/cart.png") no-repeat #378608;
                        background-size:100%;
                        float:right;
                        border-radius: 50%;
                        margin-right:0.1rem;
                        width: 0.2rem;
                        height:0.2rem;
                        margin-top:0.05rem;
                    }
                }
            }
        }
    }
</style>
<script>
export default {
     data(){
        return {
            gds:[]
        }
    },
    created(){
        this.$http.get("api/list_goods").then((res)=>{
            this.gds = res.data;
        })
    }
}
</script>

