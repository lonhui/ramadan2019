<template>
    <div id="successDialog" @touchmove.prevent>
        <div class="box">
            <p class="successText">{{text}}</p>
            <div class="share butt" @click="share">Share</div>
            <div class="button butt" @click="close">Lanjut</div>
        </div>
    </div>
</template>

<script>
import {dataRecord} from "@/api/index"

export default {
    data(){
        return{
            text:"Jawaban kamu benar. Kamu punya satu kesempatan untuk dapetin THR dari Caping."
        }
    },
    created(){
        window.shareSucceed = this.shareSucceed;
    },
    methods:{
        close(){
            this.$emit("on-close");
        },
        share(){
            let content = ''
            content='Aku baru aja ikutan kuis THR di Caping. Kamu ikutan juga yuk! Ada hadiah berlimpah yang bisa kamu menangin untuk Lebaran nanti! [link google playstore]'
            let title = content
            let pic = null
            var url ='https://app.appsflyer.com/com.engloryintertech.caping?pid=Download'
            CapingJs.share(title,content,url,pic)
        },
        shareSucceed(){
            dataRecord({type:1})
            this.close()
        },
    }
}
</script>

<style scoped>
#successDialog{
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
    padding-top: 1rem;
    line-height: 0.2rem;
}
.box{
    width: 2.75rem;
    height: 2.6rem;
    background: url('../../../../static/images/Popups_bg@2x.png'); 
    background-size: 100% 100%; 
    background-repeat: no-repeat; 
    margin: 1.56rem auto 0;
    font-family:OpenSans;
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
    top:2.33rem;
    left: 0.7rem;
}
.share{
    width: 1.28rem;
    margin: 0.1rem auto 0;
    height: 0.27rem;
    color: #82c345;
    border:#82c345 0.02rem solid;
    font-size: 0.16rem;
    border-radius: 0.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
