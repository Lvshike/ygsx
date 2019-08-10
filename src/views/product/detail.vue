<template>
    <div class="detail">
        <div class="header">
            <p>销量</p>
            <p>新品</p>
            <p>价格</p>
        </div>
        <ul class="listBox">
            <li v-for="goods in fruit" :key="goods.id">
                <router-link  @click="clickme(goods)" :to="{name:'detailhtml',params:{id:goods.id}, query:{fir:fir, sec:id}}"> 
                    <img tag="img" :src="goods.img" alt="商品图片">
                </router-link>
                <div class="inforPro">
                    <p class="title">{{goods.name}}</p>
                    <p class="mark">{{goods.introduce}}</p>
                    <p class="money">
                        <span class="price">¥{{goods.price}}</span>
                        <span class="kk">{{goods.unit}}</span>
                    </p>
                    <input type="button" @click="addGoodInCar(goods)" value="加入购物车">
                </div>
            </li>
        </ul>

    </div>
</template>


<style lang="scss" scoped>
    .detail{
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .header {
        background: rgb(238, 234, 234);
        box-shadow: 1px 1px 0.05rem #eccfcf;
        width: 100%;
        height: 0.5rem;
        font-size: 0.15rem;
        line-height: 0.5rem;
        border-bottom: 1px solid rgb(210, 218, 210);
        display: flex;
        justify-content: space-around;
        position: fixed;
        top: 0;
        p{
            height: 100%;
            font-size: 0.15rem;
            padding:0 0.2rem;
        }
    }
    .listBox{
        margin-top:0.6rem;
        
         li{
            display: flex;
            margin:0.07rem;
            box-shadow: 1px 1px 0.05rem #eeeaea;
            border:1px solid #eeeaea;
            border-radius: 0.05rem;
            padding-right:0.05rem;
            img{
                width:1.2rem;
                height: 1.2rem;
                flex-shrink: 0;
            }
            .inforPro{
                width: 100%;
                padding-left:0.05rem;
                position: relative;
                .title{
                    font-size: 0.16rem;
                    margin-top:0.13rem;
                }
                .mark{
                    font-size:0.12rem;
                    line-height: 0.34rem;
                    color:rgb(106, 236, 54);
                }
                .money{
                    position: absolute;
                    bottom:0.12rem;
                    left:0.07rem;
                    margin-top:0.12rem;
                    font-family: 'Times New Roman';
                    font-weight: normal;
                    span{
                        float: left;
                        line-height: 0.14rem;
                    }
                    .price{
                        color:rgb(238, 24, 24);
                        margin-right:0.2rem;
                    }
                    .kk{
                        font-size: 0.12rem;
                        width:0.6rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                input{
                    position:absolute;
                    padding:0.05rem;
                    border-radius: 0.03rem; 
                    right:0.1rem;
                    background: rgb(243, 11, 11);
                    border:0;
                    color:#fff;
                    bottom:0.1rem;
                }
            }
        }
    }
  
</style>
<script>
import {mapActions, mapState} from "vuex" 
import {CHANGE} from '@/vuex/project/const'
import {MYDATA} from "@/vuex/myCar/count"
export default {
    props:["id"],
    data(){
        return{
            fruit:[],
            msg:[],
            fir:this.$route.query.fir
        }
    },
    created(){
        this.$http.get("/api/group_list").then(res=>{
            this.fruit = res.data[this.$route.query.fir].detailed[this.id].child
        })
    
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit(CHANGE, this.list)
        next()
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
    }
 
}
</script>


