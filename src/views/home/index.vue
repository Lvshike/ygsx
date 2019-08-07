<template>
    <div class="home">
        <hder></hder>
        <banner></banner>
        <cont></cont>
        <btm></btm>
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
export default {
    data(){
        return {
            top:"0"
        }
    },
    components:{
        btm, hder, banner, cont
    },
    // methods:{
    //     scroll(e){
    //         this.top = document.documentElement.scrollTop || document.body.scrollTop;
    //     }
    // },
     beforeRouteLeave(to,from,next){
        this.top = document.documentElement.scrollTop||document.body.scrollTop;
        next();
    },
    activated(){
        window.scrollTo(0, this.top)
    },
    // deactivated(){//离开被缓存的组建才会触发
    //     window.removeEventListener("scroll",this.scroll)
    // }
}
</script>

