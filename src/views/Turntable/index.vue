<template>
    <div id="Turntable">
        <!-- 转盘页面 -->
        <img class="header" src="static/images/title_thecaping.png" alt="">
        <div class="turntable">
            <ul id="prize-list">
                <li class="prize-item" v-for="(item,index) in prizeList" :key="index">
                    <div class="prize-pic" v-show="item.icon">
                        <img class="prize-icon" :src="item.icon">
                    </div>
                    <div class="prize-type">
                        {{item.name}}
                    </div>
                </li>
            </ul>
            <img class="turntable_border" src="static/images/bg_turntable.png" alt="">
        </div>
        <img class="turntable_base" src="@/assets/Layer20.png" alt="">
        <img class="button butt" @click="lottery" src="@/assets/but_ambilthr.png" alt="">
        <transition name="bounce">
            <prizeDialogCall :prizeName = "prizeName" :prizeId = "prizeId" v-if="prizeCallShow" @on-close="closeDailog"></prizeDialogCall>
        </transition>
        <transition name="bounce">
            <prozeDialog :prizeName = "prizeName" :prizeId = "prizeId" :type = "prizeType" v-if="prizeShow" @on-close="closeDailog"></prozeDialog>
        </transition>
        <transition name="fade">
            <loading v-show="loadingShow"></loading>
        </transition>
        <transition name="bounce">
            <v-error :type="errorType" v-show="errorShow" @on-close="errorShow = false"></v-error>
        </transition>
    </div>
</template>

<script>
import coinImg from "../../assets/icon_poin@2x.png";
import rpImg from "../../assets/icon_gopay@2x.png";
import dianImg from "../../assets/icon_ovo@2x.png";
import prizeDialogCall from "./components/prizeDialog_call"//话费奖品弹框
import prozeDialog from "./components/prizeDialog"//其余奖品弹框
import {getTurntableList,lottery} from "@/api/index"
import loading from "@/components/loading"
import error from "@/components/error"


export default {
    data(){
        return{
            errorShow:false,
            errorType:2,
            loadingShow:false,
            buttouStatus:true,//控制按钮是否可点击，转盘转动结束前不许用户记继续发送请求
            prizeCallShow:false,
            prizeShow:false,
            prizeList:[],
            prizeName:"",
            prizeType:null,
            prizeId:null,

        }
    },
    components:{
        prizeDialogCall,
        prozeDialog,
        loading,
        "v-error":error
    },
    created(){
        this.getTurntableList()
    },
    methods:{
        closeDailog(){
            this.prizeCallShow = false
            this.prizeShow = false
            this.$router.push("/list");
        },
        // 旋转
        rotate(num){
            if(this.buttouStatus){
                this.buttouStatus = false
                var turntable = document.getElementById('prize-list')
                turntable.style['transform'] = 'rotate(337.5deg)';

                //var num = Math.floor( Math.random() * 6 ) + 1//由服务器获得

                var angle = 360 - ( num - 1 ) * 45 - 22.5//停下来的角度
                turntable.className ='turntable_'+num
                setTimeout( ()=>{
                    turntable.style['transform'] = "rotate(" + angle + "deg)";
                    turntable.className ='turntabled';
                },5900)
                setTimeout(()=>{
                    if(this.prizeType === 4){
                        this.prizeCallShow = true
                        this.buttouStatus = true
                    }else{
                        this.prizeShow = true
                        this.buttouStatus = true
                    }
                },6000)
            }
        },
        //获取转盘奖品列表
        getTurntableList(){
            this.loadingShow = true
            getTurntableList().then(res => {
                if(res.code === 0){
                    res.data.list.forEach((item,index) => {
                        switch(item.type){
                            case 3:
                                item.icon = coinImg
                                break;
                            case 5:
                                item.icon = rpImg
                                break;
                            case 6:
                                item.icon = dianImg
                                break;
                        }
                    });
                    this.prizeList = res.data.list
                }else if(res.code === 603){
                    this.errorType = 1
                    this.errorShow = true
                }else{
                    this.errorType = 2
                    this.errorShow = true
                }
                this.loadingShow = false
            }).catch(error =>{
                this.loadingShow = false
                this.errorType = 2
                this.errorShow = true
            })
        },
        //抽奖
        lottery(){
            this.loadingShow = true
            lottery().then(res => {
                if(res.code === 0){
                    this.prizeName = res.data.prizeName
                    this.prizeType = res.data.type
                    this.prizeId = res.data.prizeId
                    this.prizeList.forEach((item,index)=>{
                        if(item.id === res.data.prizeId){
                            this.rotate(index+1)
                        }
                    })
                }else{
                    this.errorShow = true
                }
                this.loadingShow = false
            }).catch(error => {
                this.loadingShow = true
                this.errorShow = true
            })
        }
    }
}
</script>

<style scoped>
#Turntable{
    width: 3.6rem;
    height: 6.4rem;
    background: url("../../../static/images/turntable_bg.jpeg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    font-family:OpenSans;
}
.header{
    width: 2.2rem;
    height: 1.3rem;
    margin-top:0.6rem;
}
.turntable{
    width: 2.8rem;
    height: 2.8rem;
    margin: 0 auto;
    border-radius: 1.4rem;
    position: relative;
}
.turntable img{
    width: 2.8rem;
    height: 2.8rem;
}
.turntable_centent{
    position: absolute;
    top: 0;
    left: 0;
}
.turntable_border{
    position: absolute;
    top: 0;
    left: 0;
}
.prize-pic{
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
}
.prize-pic img{
    width: 0.15rem;
    height: 0.15rem;
    margin-right: 0.03rem;
}

.turntable_base{
    width: 2.05rem;
    height: 0.65rem;
    position: relative;
    top: -0.25rem;
}
.button{
    width: 1.8rem;
    height: 0.6rem;
    position: relative;
    top: -0.2rem;
    border-radius: 0.08rem;
    -moz-box-shadow:0.05rem 0.05rem 0.08rem #333333; 
    -webkit-box-shadow:0.05rem 0.05rem 0.08rem #333333; 
    box-shadow:0.05rem 0.05rem 0.08rem #333333; 
}

/* ---------------------- */
#prize-list{
    width: 2.8rem;
    height: 2.8rem;
    font-weight: 600;
    background: url("../../../static/images/bg_Layer.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transform:rotate(337.5deg);
    position: relative;
}

#prize-list .prize-item {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 0.63rem;
    font-size: 0.10rem;
    line-height: 0.15rem;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2
}
#prize-list .prize-item:first-child {
    top: 0.78rem;
    left: 1.63rem;
    transform: rotate(290deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(2) {
    top: 1.09rem;
    left: 1.94rem;
    transform: rotate(335deg);
    transform-origin:0% 50%;
    color: #000;
}
#prize-list .prize-item:nth-child(3) {
    top: 1.53rem;
    left: 1.94rem;
    transform: rotate(380deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(4) {
    top: 1.87rem;
    left: 1.64rem;
    transform: rotate(425deg);
    transform-origin:0% 50%;
    color: #000;
}
#prize-list .prize-item:nth-child(5) {
    top: 1.88rem;
    left: 1.15rem;
    transform: rotate(470deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(6) {
    top: 1.53rem;
    left: 0.83rem;
    transform: rotate(515deg);
    transform-origin:0% 50%;
    color: #000;
}
#prize-list .prize-item:nth-child(7) {
    top: 1.1rem;
    left: 0.85rem;
    transform: rotate(560deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(8) {
    top: 0.75rem;
    left: 1.18rem;
    transform: rotate(605deg);
    transform-origin:0% 50%;
}
/* ------------------ */
/* 旋转动画  2秒 1次 慢快慢*/
/* 1 */
.turntable_1{
     -webkit-animation:circle_1 6s 1 ease
}
@-webkit-keyframes circle_1{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2137.5deg) }
}
/* 2 */
.turntable_2{
     -webkit-animation:circle_2 6s 1 ease
}
@-webkit-keyframes circle_2{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2092.5deg) }
}
/* 3 */
.turntable_3{
     -webkit-animation:circle_3 6s 1 ease
}
@-webkit-keyframes circle_3{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2047.5deg) }
}
/* 4 */
.turntable_4{
     -webkit-animation:circle_4 6s 1 ease
}
@-webkit-keyframes circle_4{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2002.5deg) }
}
/* 5 */
.turntable_5{
     -webkit-animation:circle_5 6s 1 ease
}
@-webkit-keyframes circle_5{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(1957.5deg) }
}
/* 6 */
.turntable_6{
     -webkit-animation:circle_6 6s 1 ease
}
@-webkit-keyframes circle_6{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(1912.5deg) }
}
/* 7 */
.turntable_7{
     -webkit-animation:circle_7 6s 1 ease
}
@-webkit-keyframes circle_7{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(1867.5deg) }
}
/* 8 */
.turntable_8{
     -webkit-animation:circle_8 6s 1 ease
}
@-webkit-keyframes circle_8{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2182.5deg) }
}

/* 弹窗过渡动画 */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
