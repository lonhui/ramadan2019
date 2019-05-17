<template>
    <div id="problem">
    <!-- 答题页面 -->
        <div class="problem_blac">
            <div class="problem">
                <div class="title">QUIZ 09</div>
                <div class="content">Nabi Muhammadm SAW lahir di kota ?</div>
            </div>
        </div>
        <div class="optionBox">
             <p class="text">Kamu Hanya Bisa Memilih Sekali. </p>
             <div :class="{'optionList':optionList[0].value.length<20,'optionList2':optionList[0].value.length>20}">
                 <div class="option" v-for="item in optionList" :key="item.id">
                     <div class="optionTop">{{item.value}}</div>
                     <div class="optionBottom">{{item.key}}</div>
                 </div>
             </div>
        </div>
        
    </div>    
</template>

<script>
export default {
    data(){
        return{
            optionList:[
                {
                    id:1,
                    key:"A",
                    value:"Madinah"
                },
                {
                    id:2,
                    key:"B",
                    value:"Mekkah"
                }
            ]
        }
    }
}
</script>

<style scoped>
.problem_blac{
    background-color: #f6f6f6;
    padding: 0.18rem;
}
.title{
    height: 0.34rem;
    border-radius: 0.05rem 0.05rem 0 0;
    background: url("../../assets/quiz_bg_green@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding-left: 0.17rem;
    color: #fff;
    font-size: 0.16rem;
}
.content{
    padding: 0.35rem 0.17rem 0.35rem 0.17rem;
    text-align: center;
    background-color: #fff;
    font-size: 0.14rem;
    border-radius: 0 0 0.05rem 0.05rem;
    -moz-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
    -webkit-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
    box-shadow:0.02rem 0.02rem 0.05rem #333333; 
}
.optionBox{
    width: 3.6rem;
    height: 4.87rem;
    background: url("../../assets/quiz_bg@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.text{
    padding-top: 0.22rem;
    text-align: center;
    font-size: 0.12rem;
}
.optionList{
    margin-top: 0.42rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.optionList .option{
    width: 1.2rem;
    height: 1.1rem;
    line-height: 0.2rem;
    border-radius: 0.06rem;
    -moz-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
    -webkit-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
    box-shadow:0.02rem 0.02rem 0.05rem #333333; 
}
/* ---------- */
.optionList2{
    margin-top: 0.42rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
.optionList2 .option{
    height: 1.1rem;
    line-height: 0.2rem;
    border-radius: 0.06rem;
    margin-bottom: 0.25rem;
    -moz-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
    -webkit-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
    box-shadow:0.02rem 0.02rem 0.05rem #333333; 
}
/* ---------- */
.optionTop{
    height: 0.55rem;
    background-color: #fff;
    border-radius: 0.06rem 0.06rem 0 0;
    font-size: 0.14rem;
    padding: 0.1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.optionBottom{
    height: 0.35rem;
    font-size: 0.18rem;
    color: #fff;
    background: url("../../assets/quiz_bg_green@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 0 0 0.06rem 0.06rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
