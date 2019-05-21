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
        <img class="turntable_base" src="static/images/Layer20.png" alt="">
        <img class="button butt" @click="rotate" src="static/images/but_ambilthr.png" alt="">
        <transition name="bounce">
            <prizeDialogCall v-if="prizeCallShow" @on-close="closeDailog"></prizeDialogCall>
        </transition>
        <transition name="bounce">
            <prozeDialog v-if="prizeShow" @on-close="closeDailog"></prozeDialog>
        </transition>
    </div>
</template>

<script>
import coinImg from "../../../static/images/icon_poin@2x.png";
import rpImg from "../../../static/images/icon_gopay@2x.png";
import dianImg from "../../../static/images/icon_ovo@2x.png";
import prizeDialogCall from "./components/prizeDialog_call"//话费奖品弹框
import prozeDialog from "./components/prizeDialog"//其余奖品弹框


export default {
    data(){
        return{
            prizeCallShow:false,
            prizeShow:false,
            prizeList:[
                {
                    id:1,
                    type:1,
                    name:"500",
                    icon:coinImg,
                    color:"#fff"
                },
                {
                    id:2,
                    type:1,
                    name:"Rp 50K",
                    icon:rpImg,
                    color:"#000"
                },
                {
                    id:3,
                    type:1,
                    name:"Pulsa Rp 10K",
                    icon:null,
                    color:"#fff"
                },
                {
                    id:4,
                    type:1,
                    name:"200",
                    icon:coinImg,
                    color:"#000"
                },
                {
                    id:5,
                    type:1,
                    name:"Rp 10K",
                    icon:rpImg,
                    color:"#fff"
                },
                {
                    id:6,
                    type:1,
                    name:"Pulsa Rp 25K",
                    icon:null,
                    color:"#000"
                },
                {
                    id:7,
                    type:1,
                    name:"Rp 20K",
                    icon:dianImg,
                    color:"#fff"
                },
                {
                    id:8,
                    type:1,
                    name:"Pulsa Rp 5K",
                    icon:null,
                    color:"#000"
                }
            ]
        }
    },
    components:{
        prizeDialogCall,
        prozeDialog
    },
    created(){
       
    },
    methods:{
        closeDailog(){
            this.prizeCallShow = false
            this.prizeShow = false
        },
        // 旋转
        rotate(){
            var turntable = document.getElementById('prize-list')
            turntable.style['transform'] = 'rotate(337.5deg)';

            var num = Math.floor( Math.random() * 6 ) + 1//由服务器获得
            console.log("奖品编号："+num)

            var angle = 360 - ( num - 1 ) * 45 - 22.5//停下来的角度
            turntable.className ='turntable_'+num
            console.log("停止角度："+angle)
            setTimeout( ()=>{
                turntable.style['transform'] = "rotate(" + angle + "deg)";
                turntable.className ='turntabled';
            },5900)
            setTimeout(()=>{
                if(num % 2 === 0){
                    this.prizeCallShow = true
                }else{
                    this.prizeShow = true
                }
            },6000)
        },
    }
}
</script>

<style scoped>
#Turntable{
    width: 3.6rem;
    height: 6.4rem;
    background: url("../../../static/images/turntable_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
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
.prize-pic img{
    width: 0.2rem;
    height: 0.2rem;
}
.turntable_base{
    width: 2.5rem;
    height: 1rem;
    position: relative;
    top: -0.38rem;
}
.button{
    width: 1.8rem;
    height: 0.6rem;
    position: relative;
    top: -0.2rem;
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
    width: 0.7rem;
    height: 0.2rem;
    line-height: 0.2rem;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2
}
#prize-list .prize-item:first-child {
    top: 0.8rem;
    left: 1.6rem;
    transform: rotate(290deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(2) {
    top: 1.08rem;
    left: 1.92rem;
    transform: rotate(335deg);
    transform-origin:0% 50%;
    color: #000;
}
#prize-list .prize-item:nth-child(3) {
    top: 1.53rem;
    left: 1.93rem;
    transform: rotate(380deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(4) {
    top: 1.85rem;
    left: 1.62rem;
    transform: rotate(425deg);
    transform-origin:0% 50%;
    color: #000;
}
#prize-list .prize-item:nth-child(5) {
    top: 1.85rem;
    left: 1.15rem;
    transform: rotate(470deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(6) {
    top: 1.55rem;
    left: 0.85rem;
    transform: rotate(515deg);
    transform-origin:0% 50%;
    color: #000;
}
#prize-list .prize-item:nth-child(7) {
    top: 1.1rem;
    left: 0.9rem;
    transform: rotate(560deg);
    transform-origin:0% 50%;
    color: #fff;
}
#prize-list .prize-item:nth-child(8) {
    top: 0.81rem;
    left: 1.18rem;
    transform: rotate(605deg);
    transform-origin:0% 50%;
}
/* ------------------ */
/* 旋转动画  2秒 1次 慢快慢*/
/* 1000 */
.turntable_1{
     -webkit-animation:circle_1 6s 1 ease
}
@-webkit-keyframes circle_1{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2137.5deg) }
}
/* 50000 */
.turntable_2{
     -webkit-animation:circle_2 6s 1 ease
}
@-webkit-keyframes circle_2{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2092.5deg) }
}
/* 2000 */
.turntable_3{
     -webkit-animation:circle_3 6s 1 ease
}
@-webkit-keyframes circle_3{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2047.5deg) }
}
/* 500 */
.turntable_4{
     -webkit-animation:circle_4 6s 1 ease
}
@-webkit-keyframes circle_4{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(2002.5deg) }
}
/* 2500 */
.turntable_5{
     -webkit-animation:circle_5 6s 1 ease
}
@-webkit-keyframes circle_5{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(1957.5deg) }
}
/* 1000 */
.turntable_6{
     -webkit-animation:circle_6 6s 1 ease
}
@-webkit-keyframes circle_6{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(1912.5deg) }
}
/* 1000 */
.turntable_7{
     -webkit-animation:circle_7 6s 1 ease
}
@-webkit-keyframes circle_7{
    0%{ transform:rotate(0deg) }
    100%{ transform:rotate(1867.5deg) }
}
/* 1000 */
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
</style>
