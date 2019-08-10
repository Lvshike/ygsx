<template>
    <div class="goback">
        <router-link to="/eat" class="fa fa-angle-left"></router-link>
        <router-link to="/detail/0" class="fa fa-refresh"></router-link>
    </div>
</template>
<style lang="scss" scoped>
    .goback{
        width: 100%;
        padding-right:0.2rem;
        padding-left:0.2rem;
        height:0.4rem;
        overflow: hidden;
        position: fixed;
        background: #f1eded;
        top:0;
        z-index: 13;
        .fa{
            font-size:0.2rem;
            line-height: 0.4rem;
            padding:0;
            font-weight:400;
        }
        .fa-angle-left{
            font-size:0.3rem;
            float: left;
        }
        .fa-refresh{
            float: right;
        }
    }
</style>
<script>
export default {
    
}
</script>


