<template>
    <div class="time_limit">
        <timer></timer>
        <tgoods></tgoods>
    </div>
</template>
<style lang="scss" scoped>
    .time_limit{
        background:#fff;
    }
</style>
<script>
import timer from "./timer"
import tgoods from "./timing_goods"
export default {
    components:{
        timer, tgoods
    }
}
</script>
