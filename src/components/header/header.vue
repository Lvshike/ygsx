<template>
    <div class="header">
        <form action="#">
            <input type="text">
            <span>
                <img src="../../assets/ic_scan_gray.png" alt="">
            </span>
        </form>
        <i>
            <img src="../../assets/ic_create_group_chat_blue.png" alt="">
        </i>
    </div>
</template>
<style lang="scss" scoped>
    .header{
        width: 100%;
        height:0.49rem;
        background:rgb(73, 175, 5);
        position:fixed;
        display: flex;
        align-items: center;
        left:0;
        top:0;
        i{
            margin:0.1rem;
            img{
                width:0.3rem;
                height:0.3rem
            }
        }
        form{
            display:flex;
            width:100%;
            height:0.35rem;
            margin-left:0.1rem;
            align-items: center;
            border-radius: 0.07rem;
            padding:0.02rem 0.1rem 0.02rem 0.4rem;
            background:#fff url("../../assets/ic_search_gray.png") no-repeat 10px center;
            background-size:0.2rem, 0.2rem;
            input{
                flex:1;
                height:100%;
                border:0;
            }
        }
        img{
            width:0.2rem;
            height:0.2rem
        }
    }
</style>
<script>
export default {
    
}
</script>

