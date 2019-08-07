<template>
    <div class="content">
        <lgroup></lgroup>
        <div class="imgBox">
            <img src="https://img10.yiguoimg.com/d/items/2019/190726/9710951090628346_1125x344.gif?w=1125&h=344" alt="">
        </div>
        <news></news>
        <tlimiet></tlimiet>
        <div class="day">
            <img src="https://img14.yiguoimg.com/d/items/2019/190624/9288738348345048_1125x149.jpg?w=1125&h=149" alt="">
        </div>
        <dysp></dysp>
        <dbt></dbt>
        <div class="pic">
             <img src="https://img13.yiguoimg.com/d/items/2019/190329/9288737670440573_658x819.jpg?w=658&h=819" alt="">
             <img src="https://img09.yiguoimg.com/d/items/2019/190304/9288737491789412_658x819.jpg?w=658&h=819" alt="">
        </div>
        <lgoods></lgoods>
        <disp></disp>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        .day{
            img{
                width: 100%;
            }
        }
        .imgBox{
            border-bottom:1px solid #f7f4f4;
            img{
                width:100%;
            }
        }
        .pic{
            img{
                float: left;
                width:50%
            }
        }
    }
</style>
<script>
import lgroup from "./list-group"
import news from "./news"
import tlimiet from "./time_limit/time_limit"
import dysp from "./day_sp"
import dbt from "./day_bt"
import lgoods from "./list_goods"
import disp from "./display"
export default {
    components:{
        // name:"home",
        lgroup, news, tlimiet, dysp, dbt, lgoods, disp
    }
}
</script>

