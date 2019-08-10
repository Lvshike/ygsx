<template>
    <div class="dbt">
        <div class="itemBox" v-for="item in list" :key="item.id">
            <img :src="item.img" alt="">
            <div class="contBox">
                <div class="showBox">
                    <div class="goods" v-for="lk in item.cont" :key="lk.id">
                        <img :src="lk.img" alt="">
                        <p>{{lk.title}}</p>
                        <span class="pr">¥ {{lk.price}}</span>
                        <span class="spc"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .dbt{
        width: 100%;
        background:#fff;
        .itemBox{
            >img{
                width:100%;
            }
            .contBox{
                height:1.7rem;
                overflow-y: hidden;
               .showBox{
                    display: flex;
                    height:120%;
                    flex-flow: nowrap;
                    overflow-x: scroll;
                    margin-left:0.05rem;
                   .goods{
                        width: 1.25rem;
                        height:1.65rem;
                        margin-right:0.07rem;
                        flex-shrink: 0;
                        border: 1px solid #e9e4e4;
                        border-radius:0.05rem;
                        padding:0.05rem;
                        border-top-color: #fff;
                        margin-top:0.02rem;
                        margin-left:0.1rem;
                        img{
                            width: 100%;
                        }
                        p{
                            width:97%;
                            overflow: hidden;
                            white-space:nowrap;
                            text-overflow: ellipsis;
                            line-height:0.24rem;
                        }
                        .pr{
                            color:rgb(236, 25, 25);
                            font-family: 'Times New Roman';
                            font-size: 0.14rem;
                            margin-left:0.03rem;
                        }
                        .spc{
                            float :right;
                            width: 0.2rem;
                            height:0.2rem;
                            border-radius: 50%;
                            background:#378608 url("../../../assets/cart.png");
                            background-size:100%;
                            // background:url("../../assets/cart.png") #378608 no-repeat;
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
            list:[]
        }
    },
    created(){
        this.$http.get("/api/day_bt").then((res)=>{
            this.list = res.data;
            // console.log(this.list)
        })
    }
}
</script>


