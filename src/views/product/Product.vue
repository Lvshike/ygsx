<template>
<!-- 第二个商品列表页 -->
    <div class="product">
        <div class="classify-search">
            <input type="search" name="search" id="search" placeholder="请输入商品名称" maxlength="30" class="name">
            <p>搜索</p>
        </div>
        <div class="leftlistdiv">
            <!-- 左侧列表栏 -->
            <ul class="leftList">
                <li v-for="item in lists" :key="item.id" @click="clickTrue(item.id)" :class="[isclick == item.id?'active':'']">
                   {{item.classname}}
                </li>
            </ul>
            <!-- 右侧列表栏 -->
            <ul class="rightlist" :lists="lists">
                <router-link tag="li" v-for="goods in fLists" :key="goods.id" :to="{name:'details', params:{id:goods.id}, query:{fir:isclick}}">
                    <img :src="goods.img" alt="">
                    <p>{{goods.name}}</p>
                </router-link> 
            </ul>
        </div>
        <ft></ft>
    </div>
</template>
<script>
import { Indicator } from 'mint-ui'
import {mapActions} from "vuex"
import {ADD} from '@/vuex/project/const'
import ft from "@/components/footer/footer"
// import {MYDATA} from "@/vuex/myCar/count"
export default {
    components:{
        ft
    },
    data(){
        return{
            isclick:"0",
            fLists: [],
            lists:[]
        }
    },
    created(){
            this.$http.get("/api/group_list").then(res=>{
            this.lists = res.data;
            this.fLists = this.lists[0].detailed 
        })
    },
    methods: {
        clickTrue(val) {
            this.isclick = val
            this.fLists = this.lists[this.isclick].detailed 
        }
    },
    //单个路由钩子，离开组件时
    // beforeRouteLeave (to, from, next) {
    //     //this.$store.dispatch('')
    //     this.$store.commit(ADD, this.fruitLists)//把对应的单个fruitlists传到vuex中fruit是store.js里的函数
    //     //console.log(this.$store.state.project.fruitLists)
    //     next()
    // }
}
</script>

<style lang="scss" scoped>
.product{
    height:100%;
    overflow: hidden;
}
.classify-search {
    background: #fff;
    width: 100%;
    height: .5rem;
    font-size: 0.12rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 0;
}
.classify-search input {
    float: left;
    width: 80%;
    height: 0.35rem;
    margin-top: 0.07rem;
    margin-left: 0.15rem;
    background: rgb(248, 245, 245);
    border-radius: 20px;
    box-sizing: border-box;
    border: none;
    padding-left: 20px;
}
.classify-search p {
    float: left;
    font-size: 0.15rem;
    color: #11B57C;
    margin-left: 0.1rem;
}
.leftlistdiv {
    width: 100%;
    height:100%;
    //height: 8rem;
    margin-top: 0.5rem;
    overflow: hidden;
}
.leftList {
    width: 26%;
    height:100%;
    // height: 5rem;
    overflow-y: auto;
    background: rgb(248, 245, 245);
    float: left;
    padding: 0;
    margin: 0;
}
.leftList li{
    width: 100%;
    height: 0.53rem;
    line-height: 0.53rem;
    text-align: center;
    list-style: none;
}
.a-txt {
    color: black;
    font-size: 0.12rem;
    display: block;
    width: 100%;
    height: 0.53rem;
}
.active {
    border-left: 2px solid  #11b57c;
    color: #11B57C;
    background: #fff;
}
.rightlist {
    font-size: 0.15rem;
    width: 74%;
    float: right;
    background: #fff;
}
.rightlist li {
    width: 33%;
    //background: red;
    float: left;
    list-style: none;
}
.rightlist li img {
    width: 1rem;
    height: 1rem;
    //margin-left: 10px;
}
.rightlist li p {
    font-size: 0.15rem;
    text-align: center;
    background: #fff;
}
</style>

