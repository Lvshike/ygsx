<template>
    <div id="app">
        <keep-alive include="home">
          <router-view></router-view>
        </keep-alive>
    </div>
</template>

<style lang="scss">
  #app{
    width: 100%;
    height:100%;
  }
</style>
<script>

export default {
  components:{
  }
}
</script>
