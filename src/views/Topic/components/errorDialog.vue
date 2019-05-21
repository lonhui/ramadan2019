<template>
    <div id="errorDialog" @touchmove.prevent>
        <div class="box">
            <p class="errorText">{{text}}</p>
            <div class="button" @click="close">Lanjut</div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            text:"Jawaban kamu salah. Kamu belum bisa dapetin THR hari ini."
        }
    },
    methods:{
        close(){
            this.$emit("on-close");
        }
    }
}
</script>

<style scoped>
#errorDialog{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}
.errorText{
    width: 2.3rem;
    margin: 0 auto;
    text-align: center;
    font-size: 0.16rem;
    color: #000;
    padding-top: 0.9rem;
    line-height: 0.2rem;
}
.box{
    width: 2.75rem;
    height: 2.02rem;
    background: url('../../../../static/images/popups_bg_white@2x.png'); 
    background-size: 100% 100%; 
    background-repeat: no-repeat; 
    margin: 1.56rem auto 0;
    position: relative;
}
.button{
    width: 1.32rem;
    height: 0.31rem;
    font-size: 0.16rem;
    color: #fff;
    border-radius: 0.15rem;
    background-color: #82c345;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:1.80rem;
    left: 0.7rem;
}
</style>
