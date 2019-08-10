<template>
    <div class="cars">
                <header class="mint-header">
            <div class="mint-header-button is-left"></div> 
            <h1 class="mint-header-title">购物车</h1> 
        
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
                        <strong>¥ {{item.price}}</strong>
                    </p>
                    <div class="num">
                        <input type="button" class="small" @click="reduceGoodInCars(item)" value="-">
                        <span class="sum">{{item.num}}</span>
                        <input type="button" class="add" @click="addGoodInCar(item)" value="+">
                    </div>
                </div>
                
            </div>
        </div>
        <div class="sumall">
            <span class="lj">合计：¥ </span>
            <span>{{getTotal.price}}</span>
            <div class="go">
                去结算
            </div>
            <btm></btm>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
import btm from "../../components/footer/footer"
export default {
    created(){
        this.$store.dispatch("initCars")
    },
    components:{
        btm
    },
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
        .mint-header-title{
            background: #dd4141;
            text-align: center;
            color: #fff;
            line-height: 0.5rem;
        
        }
    }
    
    .sumall{
        height: .6rem;
        width: 100%;
        position: fixed;
        bottom: .49rem;
        .lj{
            padding-left:0.2rem;
        }
        .go{
            // display: inline-block;
            font-size: .15rem;
            width: 47%;
            height: 100%;
            background: #fb3d3d;
            float:right;            
            text-align: center;
            line-height: .6rem;
            color: white;
           
        }
        span{
            font-size: .2rem;
            line-height: .6rem;
        }
    }
    .header{
        margin: 0;
        height: .6rem;
        background: white;
        line-height: .6rem;
        font-size: .15rem;
        text-align: center;
    }
    .lists{
        width: 100%;
        height: 100%;
    }
    .item{
        display: flex;
        box-shadow: 1px 1px 0.05rem #eeeaea;
        border:1px solid #eeeaea;
        margin:0.05rem;
        background:#fff;
        img{
           width:1.2rem;
           height:1.2rem;
       }
       .text{
           padding-left:0.2rem;
           padding-top:0.17rem;
           h2{
               font-size:0.16rem;
           }
           p{
               float: left;
               margin-top:0.3rem;
               color:#fb3d3d
           }
           .num{
               float:right;
               margin-top:0.3rem;
               margin-right:0.3rem;
               input{
                   border:0;
                   width:0.13rem;
               }
               .sum{
                   display: inline-block;
                   width: 0.2rem;
                   text-align: center;
               }
           }
       }
    }
</style>

