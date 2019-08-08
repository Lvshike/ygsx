<template>
    <div class="cars">
        <header class="mint-header">
            <div class="mint-header-button is-left"></div> 
            <h1 class="mint-header-title">购物车</h1> 
            <div class="mint-header-button is-right">
                <a href="#/" class="router-link-active">
                    <button class="mint-button mint-button--default mint-button--normal"><!----> 
                        <label class="mint-button-text">分享</label>
                    </button>
                </a>
            </div>
        </header>

                
        <div class="lists">
            <div class="item"
                v-for="item in cars"
                :key="item.name"
            >
                <div class="img">
                    <img :src="item.img" alt="">
                </div>
                <div class="text">
                    <h2>{{item.name}}</h2>
                    <p>
                        <strong>￥{{item.price}}</strong>
                    </p>
                    <div class="num">
                        <button class="small" @click="reduceGoodInCars(item)" >-</button>
                        <span class="sum">{{item.num}}</span>
                        <button class="add" @click="addGoodInCar(item)">+</button>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="sumall">
            <span>合计：￥</span>
            <span>{{getTotal.price}}</span>
            <div class="go">
                去结算
            </div>
        </div>

    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    // data(){
    //     return{
    //         goods:[]
    //     }
    // },
    // created(){
    //     this.goods = this.$store.state.myCar.cars
    //     console.log(this.goods)
    // },
    computed:{
        ...mapState({
            //随便:回调函数=>
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["getTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCars"])
    }
}
</script>


<style lang="scss" scoped>
    .cars{
        font-size: .15rem;
        
        .lists{
            .item{
                background: #f4f4f4;
                height: 1rem;
                margin-bottom: 0.1rem;
                .img{
                    float: left;
                    margin-top: 0.1rem;
                    width: 0.8rem;
                    height: 0.8rem;
                   // background: red;
                    margin-left: 0.1rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .text{
                    height: 100%;
                    width: 70%;
                   // background: green;
                    float: right;
                    font-size: 0.15rem;
                    h2{
                        margin: 0;
                        font-size: .15rem;
                    }
                    p{
                        margin: 0;
                        font-size: .15rem;
                        text-align: right;
                        color: red;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .num{
                        //background: blue;
                        text-align: right;
                        margin-top: 0.1rem;
                        button{
                            width: 0.3rem;
                        }
                    }
                }
                
            }
        }
    }
    .sumall{
        height: .6rem;
        width: 100%;
        background: #dddddd;
        position: fixed;
        bottom: .5rem;
        .go{
            display: inline-block;
            font-size: .15rem;
            width: 25%;
            height: 100%;
            background: #fb3d3d;
            float: right;
            text-align: center;
            line-height: .6rem;
            color: white;
        }
        span{
            font-size: .2rem;
            line-height: .6rem;
        }
    }
    // .header{
    //     margin: 0;
    //     height: .6rem;
    //     background: white;
    //     line-height: .6rem;
    //     font-size: .15rem;
    //     text-align: center;
    // }
    // .lists{
    //     width: 100%;
    //     height: 100%;
    //     background: #f4f4f4;
    // }
    // .item{
    //     margin: 0.05rem 0;
    //     width: 100%;
    //     height: 1rem;
    //     background: white;
    //     border-top: 0.1rem solid #f4f4f4;
    //     padding: 0.05rem 0;
    //     position: relative;
    //     div{
    //         display: inline-block;
    //     }
    //     .check{
    //         display: inline-block;
    //         height: 100%;
    //         width: 10%;
    //         float: left;
    //         i{
    //             float: left;
    //             width: .2rem;
    //             height: .2rem;
    //             border-radius: 50%;
    //             position: relative;
    //             top:43%;
    //             left:20%;
    //             background: #f4f4f4;
    //             border: 1px solid skyblue;
    //         }
    //     }
    //     .img{
    //         width: 25%;
    //         height: 80%;
    //         //background: skyblue;
    //         float: left;
    //         position: relative;
    //         top: 10%;
    //         img{
    //             width: 100%;
    //             height: 100%;
    //         }
    //     }
    //     .text{
    //         //float: left;
    //         height: 100%;
    //         width: 50%;
    //         //background: yellow;
    //         overflow: hidden;
    //         white-space: nowrap;
    //         text-overflow: ellipsis;
    //         h2{
    //             font-size: .15rem;
    //             overflow: hidden;
    //             white-space: nowrap;
    //             text-overflow: ellipsis;
    //         }
    //         p{
    //             margin: 0;
    //             position: relative;
    //             color: red;
    //             bottom: -30%;
    //         }
    //     }
    //     .del{
    //         float: right;
    //         margin-top: 12%;
    //         padding-right: .2rem;
    //     }
    //     .num{
    //         float: right;
    //         height: .24rem;
    //         //background: skyblue;
    //         position: relative;
    //         bottom:0;
    //         right: 0;
    //         z-index: 10;
    //         margin: 0;
    //         span{
    //             font-size: .15rem;
    //             display: inline-block;
    //             //width: .4rem;
    //             // height: 100%;
    //             line-height: .24rem;
    //             text-align: center;
    //             border: 1px solid #f4f4f4;
    //         }
    //         button{
    //             display: inline-block;
    //             width: .5rem;
    //             height: 100%;
    //             line-height: .24rem;
    //             text-align: center;
    //             border: 1px solid #f4f4f4;
    //         }
    //         margin-bottom: .6rem;
    //     }
    //}
</style>

