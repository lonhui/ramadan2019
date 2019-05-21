<template>
    <div id="prizeCallDialog" @touchmove.prevent>
        <div class="box">
            <p class="successText">
                Kamu dapat THR pulsa Rp <span style="color:red">{{prize}}</span>. Isi nomor hp mu di bawah ini dengan benar.
            </p>
            <input type="number"  placeholder="08xxxxxxxxxx">
            <div class="button butt" @click="close">Kirim</div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            prize:"5000"
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
#prizeCallDialog{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}
.successText{
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
    height: 2.22rem;
    background: url('../../../../static/images/Popups_bg@2x.png'); 
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
    top:2.0rem;
    left: 0.7rem;
}
input{
    outline: none;
    width: 1.8rem;
    line-height: 0.25rem;
    margin-top:0.2rem; 
    border: none;
    text-align: center;
    border-bottom: #82c345 0.02rem solid;
    font-weight: 600;
}
</style>
