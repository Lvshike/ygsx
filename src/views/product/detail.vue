<template>
    <div class="detail">
        <div class="header">
            <p>销量</p>
            <p>新品</p>
            <p>价格</p>
        </div>
        <li
            v-for="good in fruit"
            :key="good.id"
        >
            <router-link id="one" tag="span" :to="{name:'detailhtml',params:{id:good.id}}">
                <img tag="img" :src="good.img" alt="商品图片">
            </router-link>
            <div class="inforPro">
                <p class="title">{{good.name}}</p>
                <p class="mark">{{good.introduce}}</p>
                <p>
                    <span class="price">￥{{good.price}}</span>
                    <span>{{good.unit}}</span>
                    <button @click="addGoodInCar(good)">加入购物车</button>
                </p>
            </div>
        </li>

    </div>
</template>

<script>
import {mapActions} from "vuex" 
import {CHANGE} from '@/vuex/project/const'
export default {
    data(){
        return{
            list:"",//查看是哪个子id，并通过这个添加孙数据
            fruit:[]
        }
    },
    created(){
        //console.log(this.$route.params)//获取网页的子id
        this.list = this.$route.params.id
        //console.log(this.$store.state.fruitLists)//查看vuex中是否有值
        this.fruit = this.$store.state.project.fruitLists[this.list].child
        // console.log("这是fruit")
        // console.log(this.fruit)
        //console.log(this.$store.state.fruitLists)
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit(CHANGE, this.list)
        next()
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
        // addCar:function(id){
        //     //获取到了具体的水果的那一列
        //     this.fruit[id]
        //     console.log(this.$store)
        // }
    }
 
}
</script>
<style lang="scss" scoped>
    p{
        margin: 0;
    }
    li:first-of-type{
        margin-top:0.6rem; 
    }
    li{
        list-style: none;
    }
    .header {
        background: white;
        width: 100%;
        height: 0.5rem;
        font-size: 0.15rem;
        line-height: 0.5rem;
        border-bottom: 1px solid green;
        display: flex;
        justify-content: space-around;
        position: fixed;
        top: 0;
        p{
            height: 100%;
            font-size: 0.15rem;
        }
    }
    li{
        border: 1px solid #f4f4f4;
        width: 98%;
        height: 1.6rem;
        padding: 1%;
        margin-top: 0.2rem;
        img{
            width: 30%;
            height: 100%;
        }
        div{
            height: 100%;
            width: 60%;
            font-size: 0.15rem;
            //background: skyblue;
            float: right;
            .title{
                font-size: 0.15rem;
                margin-bottom: 0.15rem;
            }
            .mark{
                margin-bottom: 0.15rem;
                color: gray;
                font-size: .15rem;
            }
            p{
                .price{
                    color: red;
                    margin-right: 0.2rem;
                    font-size: .15rem;
                }
                button{
                    float: right;
                    margin-right: 0;
                    position: relative;
                    bottom: -0.2rem;
                }
            }
        }
    }
</style>


