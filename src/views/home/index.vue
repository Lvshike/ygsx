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
        height:100%
    }
</style>
<script>
import btm from "../../components/footer/footer"
import hder from "../../components/header/header"
import banner from "./banner"
import cont from "./content/content"
export default {
    components:{
        btm, hder, banner, cont
    }
}
</script>

