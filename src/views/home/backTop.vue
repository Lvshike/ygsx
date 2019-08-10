<template>
    <div class="backtop" @click="backtop" v-if="flag">
        <i class="fa fa-arrow-up"></i>
    </div>
</template>
<style lang="scss" scoped>
    .backtop{
        position: fixed;
        background: rgba($color: #000, $alpha: 0.2);
        border-radius: 50%;
        bottom:0.7rem;
        right:0.2rem;
        width:0.3rem;
        height:0.3rem;
        text-align: center;
        line-height: 0.3rem;
        z-index: 12;
        
        i{
            color:#fff;
            font-size:0.12rem;
        }
    }
</style>
<script>
export default {
    props:["flag"],
    methods:{

        backtop(){
            window.scrollTo(0, 0)
        }
    },
}
</script>

