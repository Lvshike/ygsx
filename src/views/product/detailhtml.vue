<template>
    <div class="detailhtml"
    >
        <img :src="product.img" alt="">
        <p class="name">{{product.name}}</p>
        <p class="introduce">{{product.introduce}}</p>
        <div class="price">￥{{product.price}}</div>
        <div class="servenDay">不支持7天无理由退货</div>
        <div class="unit">规格:
            <span>{{product.unit}}</span>
        </div>
        <div class="num">
            <i>商品剩余：</i>
            <span class="sum">1000</span>
        </div>
        <div class="footer">
            <a href="./Product">首页</a>
            <router-link tag="a" to="/cars">购物</router-link>
            <button @click="addGoodInCar(product)">加入购物车</button>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex" 
export default {
    data(){
        return{
            list:"",
            idname:"",
            product:""
        }
    },
    created(){
        //console.log(this.$store.state.project.fruitLists)//查看vuex中是否有值
        this.list = this.$store.state.project.biaozhi//第二层的id
        //console.log(this.$route.params)//获取网页的子id
        this.idname = this.$route.params.id//console.log("这是id名")console.log(this.list)第三层的id
        this.product = this.$store.state.project.fruitLists[this.list].child[this.idname]
        //console.log("这是product")
        //console.log(this.product)
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
            //获取到了具体的水果的那一列
            //console.log(this.product)
    }
}
</script>


<style lang="scss" scoped>
    .detailhtml{
        font-size: 0.12rem;
        img{
            width: 100%;
            border: gray;
        }
        p{
            margin: 0;
            padding-left: 0.18rem;
        }
        .name{
            margin-bottom: 0.18rem;
            height: 0.4rem;
            line-height:0.4rem;
            //background: gray;
            font-size: 0.15rem;
            margin-bottom: 0.1rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .introduce{
            margin-bottom: 0.18rem;
            height: 0.4rem;
            line-height:0.4rem;
            //background: gray;
            font-size: 0.15rem;
            color:gray;
        }
        .price{
            margin-bottom: 0.18rem;
            height: 0.4rem;
            line-height:0.4rem;
            font-size: 0.2rem;
            color: red;
            border-bottom:1px solid gray;
        }
        .servenDay{
            margin-bottom: 0.18rem;
            height: 0.4rem;
            line-height:0.4rem;
            color: gray;
            border-bottom:0.2rem solid #f4f4f4;
        }
        .unit{
            margin-bottom: 0.18rem;
            height: 0.4rem;
            line-height:0.4rem;
            color: gray;
            border-bottom:1px solid #f4f4f4;
            span{
                display: inline-block;
                height: 0.2rem;
                padding: 0.1rem 0;
                border: 1px solid green;
               
            }
        }
        .num{
            height: .5rem;
            //background: skyblue;
            span{
                display: inline-block;
                width: .4rem;
                height: 100%;
                //background: red;
                line-height: .4rem;
                text-align: center;
                border: 1px solid #f4f4f4;
            }
            margin-bottom: .6rem;
        }
        .footer{
            background: white;
            position:fixed;
            bottom:0;
            height: .6rem;
            width: 100%;
            padding-left: 2px;
            border-top:2px solid #f4f4f4;
            a{
                display: inline-block;
                font-size: 0.18rem;
                height: 100%;
                width: .5rem;
                margin: 0 2px;
                line-height: .6rem;
                color: black;
                text-decoration: none;
            }
            button{
                height: 100%;
                width: 67%;
                background: red;
                font-size: .2rem;
                float: right;
                color: white;
            }
        }
    }
</style>


