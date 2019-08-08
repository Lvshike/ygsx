<template>
    <div class="home">
        <hder></hder>
        <banner></banner>
        <cont></cont>
        <btm></btm>
        <backtop :flag="flag"></backtop>
    </div>
</template>
<style lang="scss" scoped>
    .home{
        width:100%;
        padding:0.49rem 0;
    }
</style>
<script>
import btm from "../../components/footer/footer"
import hder from "../../components/header/header"
import banner from "./banner"
import cont from "./content/content"
import backtop from "./backTop"
export default {
    name:"home",
    data(){
        return {
            top:"0",
            flag:false
        }
    },
    components:{
        btm, hder, banner, cont, backtop
    },
    methods:{
        scr(e){
            var top = document.documentElement.scrollTop||document.body.scrollTop;
            if(top>=400 && !this.flag){
                this.flag = true;
            }else if(top < 400 && this.flag){
                this.flag = false;
            }
        }
    },

    beforeRouteLeave(to,from,next){
        this.top = document.documentElement.scrollTop||document.body.scrollTop;
        next();
    },
    activated(){
        window.scrollTo(0, this.top)
        window.addEventListener("scroll", this.scr)
    }
}
</script>

