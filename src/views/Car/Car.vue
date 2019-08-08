<template>
    <div class = "car">
       car
           <router-view></router-view>
       <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
        components:{
        Tabbar
   }
}
</script>

<style lang="scss" scoped>

</style>
