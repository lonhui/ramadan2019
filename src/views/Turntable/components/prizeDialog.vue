<template>
    <div id="prizeDialog" @touchmove.prevent>
        <div class="box">
            <!-- 积分icon -->
            <img class="icon" v-if="type === 3" src="@/assets/icon_poin@2x.png" alt="">
            <!-- GOPAY icon -->
            <img class="icon" v-if="type === 5" src="@/assets/icon_gopay@2x.png" alt="">
            <!-- OVO icon -->
            <img class="icon" v-if="type === 6" src="@/assets/icon_ovo@2x.png" alt="">
            <div class="content">
                <!-- 获得积分 -->
                <p class="successText" v-if="type === 3">
                    Selamat kamu dapat THR Poin Caping senilai <span style="color:red">{{prizeName}}</span>.
                </p>
                <!-- 充值支付GOPAY -->
                <p class="successText" v-if="type === 5">
                    Kamu dapat THR saldo Go-Pay <span style="color:red">{{prizeName}}</span>. Isi nomor hp mu di bawah ini dengan benar
                </p>
                <!-- 充值支付OVO -->
                <p class="successText" v-if="type === 6">
                    Kamu dapat THR pulsa <span style="color:red">{{prizeName}}</span>. Isi nomor hp mu di bawah ini dengan benar
                </p>
                <input type="number" id="input" v-model="phoneNum"  placeholder="08xxxxxxxxxx" v-if="type !== 3">`
            </div>
            
            <div class="button butt" @click="close">Kirim</div>
        </div>
        <img class="header" src="static/images/word_selamat@2x.png" alt="">
    </div>
</template>

<script>
import {setRechargeInfo} from "@/api/index"

export default {
    props:["prizeName","type","prizeId"],
    data(){
        return{
           phoneNum:null
        }
    },
    created(){
   
    },
    methods:{
        close(){
            if(this.type !== 3){
                if(this.phoneNum && this.phoneNum.length >= 8){
                    this.setInfo()
                }else{
                    document.getElementById("input").style.borderBottomColor = "red"
                }
            }else{
                this.$emit("on-close");
            }
        },
        verifyPhoneNum(){
            if(this.phoneNum && this.phoneNum.length < 8){
                document.getElementById("input").style.borderBottomColor = "red"
            }
        },
        setInfo(){
            let data = {
                prizeId:this.prizeId,
                accountOrMobile:this.phoneNum
            }
            setRechargeInfo(data).then(res => {
                if(res.code === 0){
                    this.$emit("on-close");
                }
            }).catch(error => {

            })
        }
    },
    watch:{
        "phoneNum":function(){
            if(this.phoneNum && this.phoneNum.length >= 8){
                document.getElementById("input").style.borderBottomColor = "#82c345"
            }
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
    width: 2.35rem;
    height: 2.2rem;
    background: url('../../../../static/images/bg@2x.png'); 
    background-size: 100% 100%; 
    background-repeat: no-repeat; 
    margin: 1.56rem auto 0;
    font-family:OpenSans;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
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
.content{
    height: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.successText{
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
