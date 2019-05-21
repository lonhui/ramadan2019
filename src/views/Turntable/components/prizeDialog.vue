<template>
    <div id="prizeDialog" @touchmove.prevent>
        <div class="box">
            <!-- 积分icon -->
            <img class="icon" v-if="type === 1" src="static/images/icon_poin@2x.png" alt="">
            <!-- GOPAY icon -->
            <img class="icon" v-if="type === 2" src="static/images/icon_gopay@2x.png" alt="">
            <!-- OVO icon -->
            <img class="icon" v-if="type === 3" src="static/images/icon_ovo@2x.png" alt="">
            <!-- 获得积分 -->
            <p class="successText" v-if="type === 1">
                Selamat kamu dapat THR Poin Caping senilai <span style="color:red">{{prize}}</span>.
            </p>
            <!-- 充值支付GOPAY -->
            <p class="successText" v-if="type === 2">
                Kamu dapat THR saldo Go-Pay Rp <span style="color:red">{{prize}}</span>. Isi nomor hp mu di bawah ini dengan benar
            </p>
            <!-- 充值支付OVO -->
            <p class="successText" v-if="type === 3">
                Kamu dapat THR pulsa Rp <span style="color:red">{{prize}}</span>. Isi nomor hp mu di bawah ini dengan benar
            </p>
            <input type="number"  placeholder="08xxxxxxxxxx" v-if="type !== 1">
            <div class="button butt" @click="close">Kirim</div>
        </div>
        <img class="header" src="static/images/word_selamat@2x.png" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{
            prize:"5000",
            type:1,
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
#prizeDialog{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}

.box{
    width: 2.75rem;
    height: 2.2rem;
    background: url('../../../../static/images/bg@2x.png'); 
    background-size: 100% 100%; 
    background-repeat: no-repeat; 
    margin: 1.56rem auto 0;
    font-family:OpenSans;
    position: relative;
}
.header{
    width: 2rem;
    position: relative;
    top:-2.5rem;
}
.icon{
    width: 0.4rem;
    padding-top: 0.2rem;
}
.successText{
    width: 2.3rem;
    margin: 0 auto;
    text-align: center;
    font-size: 0.16rem;
    color: #000;
    padding-top: 0.2rem;
    line-height: 0.2rem;
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
    font-size: 0.14rem;
    border-bottom: #82c345 0.02rem solid;
    font-weight: 600;
}
</style>
