<template>
    <div class="item" @click = "clickItem">
         <span class = "title">{{txt}}</span>
    </div>
</template>

<style lang="scss" scoped>
   .item{
       flex:1;
       display:flex;
      justify-content: center;
       align-items: center;

   }
</style>

<script>
export default {
   props:["txt","mark","sel","changeSelected"],
   methods:{
       clickItem(){
       this.changeSelected(this.mark)
       this.$router.push("/" + this.mark)
          
       }
   }

}
</script>
