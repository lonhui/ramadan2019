<template>
    <div id="answer">
        <!-- 答案页面 -->
        <img class="title" src="@/assets/word_tahukankamu@2x.png" alt="">
        <div class="box">
            <p>{{text}}</p>
        </div>
        <div class="button" @click="goTo">Lanjut</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text:'Dasar Sunnah sarapan sebelum Shalat Idul Fitri dari hadits berikut: “Rasulullah tidak berangkat pada Idul Fitri hingga beliau memakan beberapa kurma." (HR. Bukhari)'
        }
    },
    created(){
        console.log("答案是否正确："+this.$router.currentRoute.params.answerResult)
        console.log("获取答案请求！！！")
    },
    methods:{
        goTo(){
            if(this.$router.currentRoute.params.answerResult){
                this.$router.push("/turntable");
            }else{
                this.$router.push("/list");
            }
        }
    }
}
</script>

<style scoped>
#answer{
    width: 3.6rem;
    height: 6.4rem;
    background: url("../../assets/capingvcr_bg@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center
}
.title{
    width: 1.74rem;
    height: 0.64rem;
    margin-top:1.24rem;
}
.box{
    width: 2.85rem;
    margin: 0.39rem auto 0;
    border-radius: 0.08rem;
    background-color: #fff;
    border: #d8a02d 0.04rem solid;
}
.box p{
    font-size: 0.14rem;
    line-height: 0.20rem;
    padding: 0.4rem 0.2rem;
}
.button{
    width: 1.32rem;
    height: 0.31rem;
    background-color: #d8a02d;
    border-radius: 0.15rem;
    color: #fff;
    font-size: 0.16rem;
    margin: 0.8rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
