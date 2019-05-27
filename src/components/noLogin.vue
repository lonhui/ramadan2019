<template>
    <div id="noLogin" @touchmove.prevent>
        <div class="box">
            <img class="headerImg" src="static/images/title_thecaping.png" alt="">
            <div class="content">
                <p class="errorText">{{text}}</p>
            </div>
            <div class="button" @click="close">login</div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            text:"kamu harus login dulu untuk!",
        }
    },
    created(){
      
    },
    methods:{
        close(){
            this.$emit("on-close")
        }
    }
}
</script>

<style scoped>
#noLogin{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.errorText{
    text-align: center;
    font-size: 0.16rem;
    color: #000;
    font-weight: 600;
    line-height: 0.2rem;
}
.box{
    width: 2.75rem;
    height: 1.5rem;
    background-color: #fff;
    border-radius: 0.08rem;
    position: relative;
}
.headerImg{
    width: 1.8rem;
    height: 1.2rem;
    position: absolute;
    top: -0.8rem;
    left: 0.42rem;
}
.content{
    padding-top: 0.6rem
}
.button{
    width: 1.32rem;
    height: 0.31rem;
    font-size: 0.16rem;
    color: #fff;
    border-radius: 0.15rem;
    background-color: #af1919;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:1.35rem;
    left: 0.7rem;
}
</style>
