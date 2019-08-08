<template>
<!-- 第二个商品列表页 -->
    <div class="product">
        <div class="classify-search">
            <input type="search" name="search" id="search" placeholder="请输入商品名称" maxlength="30" class="name">
            <p>搜索</p>
        </div>
        <div class="leftlistdiv">
            <!-- 左侧列表栏 -->
            <ul class="leftList" :lists="lists">
                <li :item="item.id" 
                v-for="(item,index) of lists" 
                :key="item.id"
                >
                    <p class="a-txt" 
                    @click="clickTrue(item,index)" 
                    :class="(isTrue && item==prev)?'active':''"
                    >
                    {{ item.classname }}
                    </p>
                </li>
            </ul>
            <!-- 右侧列表栏 -->
            <ul class="rightlist" :lists="lists">
                <router-link
                :itemkid="item.id" v-for="item in fruitLists" :key="item.id"
                tag="li" :to="{name:'detail',params:{id:item.id}}"
                >
                    <img :src="item.img" alt="">
                    <p>{{ item.name }}</p>  
                </router-link>
                
            </ul>
        </div>
    </div>
</template>
<script>
import { Indicator } from 'mint-ui'
import {mapActions} from "vuex"
import {ADD} from '@/vuex/project/const'
export default {
    components:{
    },
    data(){
        return{
            isTrue: false,
            prev: 100,
            fruitLists: [],
            giveVuex:[],
            test:[],
            lists:[]
        }
    },
    created(){
        //console.log(this.$store.state.fruitLists)//查看初始化时vuex的内容
        //获取api数据
        this.$http.get("/api/api/group_list").then(res=>{
            this.lists = res.data;
        })

    },
    methods: {
        clickTrue(item,index) {
            if (this.prev != item) {
                this.isTrue = true
            }
            if (this.prev == item) {
                this.isTrue = !this.isTrue
            }
            this.prev = item;
            //this.fruitLists = this.lists[index].type;
            //console.log(this.prev.id)//左侧的id地址
            //console.log(this.lists[index])
            this.fruitLists = item.detailed//第三层
        }
    },
    //单个路由钩子，离开组件时
    beforeRouteLeave (to, from, next) {
        //this.$store.dispatch('')
        this.$store.commit(ADD, this.fruitLists)//把对应的单个fruitlists传到vuex中fruit是store.js里的函数
        //console.log(this.$store.state.project.fruitLists)
        next()
    }



}
</script>

<style lang="scss" scoped>
// .product{
//     width: 100%;
// }
*{
    margin: 0;
    padding: 0;
}
.classify-search {
    background: white;
    width: 100%;
    height: .5rem;
    font-size: 0.12rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 0%;
}
.classify-search input {
    float: left;
    width: 80%;
    height: 0.35rem;
    margin-top: 0.07rem;
    margin-left: 0.15rem;
    background: #f4f4f4;
    border-radius: 20px;
    box-sizing: border-box;
    border: none;
    padding-left: 20px;
}
.classify-search p {
    float: left;
    font-size: 0.15rem;
    color: #11B57C;
    margin-left: 0.1rem;}
.leftlistdiv {
    width: 100%;
    //height: 8rem;
    margin-top: 0.6rem;
}
.leftList {
    width: 26%;
    height: 5rem;
    overflow-y: auto;
    background: #f4f4f4;
    float: left;
    padding: 0;
    margin: 0;
}
.leftList li{
    width: 0.83rem;
    height: 0.53rem;
    line-height: 0.53rem;
    text-align: center;
    list-style: none;
}
.a-txt {
    color: black;
    font-size: 0.12rem;
    display: block;
    width: 0.83rem;
    height: 0.53rem;
}
.active {
    border-left: 2px solid  #11b57c;
    color: #11B57C;
    background: white;
}
.rightlist {
    font-size: 0.15rem;
    width: 74%;
    float: right;
    background: white;
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
    background: #f4f4f4;
}
</style>

