<template>
    <div class="detailhtml">
        <img :src="product.img" alt="">
        <p class="name">{{product.name}}</p>
        <p class="introduce">{{product.introduce}}</p>
        <div class="price">¥ {{product.price}}</div>
        <div class="servenDay">不支持7天无理由退货</div>
        <div class="unit">
            规格:{{product.unit}}
        </div>
        <div class="footer">
            <router-link to="/home" class="ll">首页</router-link>
            <router-link tag="a" to="/cars">购物</router-link>
            <input type="button" @click="addGoodInCar(product)" value="加入购物车">
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex" 
import {MYDATA} from "@/vuex/myCar/count"
import {mapState} from "vuex"
export default {
    props:["id"],
    data(){
        return{
            list:"",
            idname:"",
            product:""
        }
    },
    created(){
       this.$http.get("/api/group_list").then(res=>{
            this.product = res.data[this.$route.query.fir].detailed[this.$route.query.sec].child[this.id]
        })
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
    }
}
</script>


<style lang="scss" scoped>
    .detailhtml{
        font-size: 0.12rem;
        height:100%;
        overflow: auto;
        img{
            width: 100%;
            border: gray;
        }
        p{
            padding-left: 0.18rem;
        }
        .name{
            height: 0.4rem;
            line-height:0.3rem;
            font-size: 0.18rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .introduce{
            height: 0.4rem;
            line-height:0.2rem;
            font-size: 0.12rem;
            color:rgb(100, 207, 12);
        }
        .price{
            margin-left: 0.15rem;
            height: 0.4rem;
            line-height:0.4rem;
            font-size: 0.2rem;
            color: red;
            font-family: 'Times New Roman'
           
        }
        .servenDay{
            padding:0.05rem 0 0.05rem 0.15rem;
            line-height:0.3rem;
            margin-bottom:0.05rem;
            border-top:.08rem solid rgb(245, 242, 242);
            border-bottom:.09rem solid rgb(245, 242, 242);
        }
        .unit{
            padding:0.05rem 0 0.05rem 0.15rem;
            line-height:0.4rem;
            border-bottom:.09rem solid rgb(245, 242, 242);
            span{
                display: inline-block;
                height: 0.2rem;
                padding: 0.1rem 0;
                border: 1px solid green;
               
            }
        }
        .num{
            height: .5rem;
            span{
                display: inline-block;
                width: .4rem;
                height: 100%;
                line-height: .4rem;
                text-align: center;
                border: 1px solid #f4f4f4;
            }
            margin-bottom: .6rem;
        }
        .footer{
            overflow: hidden;
            width:100%;
            background: white;
            position:fixed;
            bottom:0;
            height: .6rem;
            width: 100%;
            padding-left: 2px;
            border-top:2px solid #f4f4f4;
            // display:flex;
            width:100%;
            // justify-content: space-between;

            a{
                padding-left:0.1rem;
                float: left;
                font-size: 0.18rem;
                margin: 0 2px;
                line-height: .6rem;
                color: rgb(12, 11, 11);
                text-decoration: none;
                text-align: center;
                // flex-flow: 1;
            }
            .ll{
                 margin-right:0.1rem;
            }
            input{
                height:100%;
                border:0;
                padding:0.05rem;
                width:1.4rem;
                text-align: center;
                background: rgb(252, 5, 5);
                font-size: .2rem;
                float: right;
                color: rgb(250, 246, 246);
                cursor: pointer;
            }
        }
    }
</style>


