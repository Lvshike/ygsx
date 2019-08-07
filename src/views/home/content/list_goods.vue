<template>
    <div class="list_goods">
       <ul class="list_box">
           <li v-for="item in goods" :key="item.id">
               <div class="cont_box">
                   <img :src="item.img" alt="">
                    <div>
                        <p>{{item.title}}</p>
                        <p>
                            <span class="green">{{item.label}}</span><span class="kk">{{item.content}}</span>
                        </p>
                        <p><span class="money">¥{{item.price}}</span><span>/{{item.num}}</span></p>
                    </div>
               </div>
           </li>
       </ul>
    </div>
</template>
<style lang="scss" scoped>
    .list_goods{
        background:#fff;
        .list_box{
            li{
                box-shadow: 1px 1px 0.05rem #eeeaea;
                height:1.2rem;
                border:1px solid #eeeaea;
                margin:0.15rem;
                overflow: hidden;
                border-radius: 0.05rem;
                .cont_box{
                    display: flex;
                    padding-top:0.15rem;
                    img{
                        width:1rem;
                        height:1rem;
                        margin-left:0.1rem;
                    }
                    div{
                        display: flex;
                        flex-flow: column;
                        margin-left:0.15rem;
                        margin-top:0.05rem;
                        p{
                            line-height:0.28rem;
                            overflow: hidden;
                            white-space: nowrap;
                            
                            span{
                                font-size:0.14rem;
                            }
                            .green{
                                padding:0.03rem;
                                border:1px solid #37d111;
                                border-radius:0.7rem;
                                color:#37d111;
                            }
                            .kk{
                                margin-left:0.1rem;
                            }
                            .money{
                                color:red;
                            }
                        }
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
            goods:[]
        }
    },
    created(){
        this.$http.get("api/list_goods").then((res)=>{
            this.goods = res.data;
        })
    }
}
</script>

