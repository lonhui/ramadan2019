<template>
  <div id="home">
    <div class="butBox">
      <div class="button butt" @click="goToList">Ikuti Quiz</div>
      <div class="button cara butt" @click="howFollowupShow = true">Cara Ikutan</div>
      <div class="syarat butt" @click="goToRule">Syarat dan Ketentuan</div>
    </div>
    <transition name="bounce">
      <v-howFollowup v-if="howFollowupShow" @on-close="close_howFollowupShow"></v-howFollowup>
    </transition>
    <transition name="bounce">
      <v-error :type="errorType" v-show="errorShow" @on-close="errorShow = false"></v-error>
    </transition>
  </div>
</template>

<script>
import howFollowup from "./components/HowFollowup"
import {setCookie,getCookie} from "@/util/Cookie"
import error from "@/components/error"


export default {
  data() {
    return {
      errorShow:false,
      howFollowupShow: false,
      user:{},
      errorType:1,
    };
  },
  components: {
    "v-howFollowup": howFollowup,
    "v-error":error
  },
  created(){
    this.getUidAndDid()
  },
  methods: {
    close_howFollowupShow() {
      this.howFollowupShow = false;
      this.goToList();
    },
    // 跳转到条约页
    goToRule() {
      this.$router.push("/rule");
    },
    // 验证uid & did,跳转到列表页
    goToList() {
      if(!getCookie("uid") || !getCookie("did")){
        this.errorType = 1 
        this.errorShow = true
      }else{
        this.$router.push("/list");
      }
    },
    //获取uid & did
    getUidAndDid(){
        const url = window.location.href
        let uid = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9]+)/)
        let did = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9A-Z]+)/)
        if(uid && uid.length >= 2){
          this.user.uid = uid[1]
          setCookie("uid",uid[1],1)
        }else{
          if(getCookie("uid")){
            this.user.uid = getCookie("uid")
          }else{
            if(!this.errorShow){
              this.errorType = 1
              this.errorShow = true
            }
          }
        }
        if(did && did.length >= 2){
          this.user.deviceId = did[1]
          setCookie("did",did[1],1)
        }else{
          if(getCookie("did")){
            this.user.deviceId = getCookie("did")
          }else{
            if(!this.errorShow){
              this.errorType = 1
              this.errorShow = true
            }
          }
        }
    },
  }
};
</script>

<style scoped>
#home {
  width: 3.6rem;
  height: 6.4rem;
  background: url("../../../static/images/capingvcr_bg_thecaping@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.butBox {
  padding-top: 4.85rem;
  font-family:OpenSans;
}
.button {
  width: 1.32rem;
  height: 0.31rem;
  color: #fff;
  font-size: 0.1rem;
  font-weight: 700;
  border-radius: 0.15rem;
  background-color: #82c345;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
  -webkit-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
  box-shadow:0.02rem 0.02rem 0.05rem #333333;
}
.cara {
  margin-top: 0.1rem;
}
.syarat {
  width: 1.47rem;
  height: 0.25rem;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.1rem;
  border-radius: 0.12rem;
  background-color: #e7e7e7;
  margin: 0.1rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -moz-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
  -webkit-box-shadow:0.02rem 0.02rem 0.05rem #333333; 
  box-shadow:0.02rem 0.02rem 0.05rem #333333;
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
