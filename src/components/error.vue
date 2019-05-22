<template>
    <div id="error" @touchmove.prevent>
        <div class="box">
            <div class="content">
                <p class="errorText">{{text}}</p>
            </div>
            <div class="button" @click="close">Lanjut</div>
        </div>
    </div>
</template>

<script>

export default {
    props:["type"],
    data(){
        return{
            textArr:{
                noLogin:"kamu harus login dulu untuk!",
                noInter:"Koneksi internet tidak stabil. Silahkan coba lagi ya!"
            },
            text:null
        }
    },
    created(){
        switch(this.type){
            case 1:
                this.text = this.textArr.noLogin
                break;
            case 2:
                this.text = this.textArr.noInter
                break;
        }
    },
    methods:{
        close(){
            this.$emit("on-close")
        }
    }
}
</script>

<style scoped>
#error{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8)
}
.errorText{
    margin: 0 auto;
    text-align: center;
    font-size: 0.16rem;
    color: #000;
    line-height: 0.2rem;
}
.box{
    width: 2.75rem;
    height: 2.02rem;
    background: url('../../static/images/popups_bg_white@2x.png'); 
    background-size: 100% 100%; 
    background-repeat: no-repeat; 
    margin: 1.56rem auto 0;
    position: relative;
}
.content{
    height: 1rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 0.7rem;
    display: flex;
    align-items: center;
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
