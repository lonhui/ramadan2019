<template>
  <div id="home">
    <div class="butBox">
      <div class="button" @click="goToList">Ikuti Quiz</div>
      <div class="button cara" @click="howFollowupShow = true">Cara Ikutan</div>
      <div class="syarat" @click="goToRule">Syarat dan Ketentuan</div>
    </div>
    <transition name="bounce">
      <v-howFollowup v-if="howFollowupShow" @on-close="close_howFollowupShow"></v-howFollowup>
    </transition>
  </div>
</template>

<script>
import howFollowup from "./components/HowFollowup";
import {setCookie,getCookie} from "@/util/Cookie"
import {apiPost} from "@/api/index"

export default {
  data() {
    return {
      howFollowupShow: false,
      user:{}
    };
  },
  components: {
    "v-howFollowup": howFollowup,
  },
  created(){
    this.getUidAndDid()
  },
  methods: {
    close_howFollowupShow() {
      this.howFollowupShow = false;
      this.goToList();
    },
    goToRule() {
      this.$router.push("/rule");
    },
    goToList() {
      console.log("验证用户请求！！！")
      this.$router.push("/list");
    },
    getUidAndDid(){
        const url = window.location.href
        let uid = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9]+)/)
        let did = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9]+)/)
        if(uid && uid.length >= 2){
          this.user.uid = uid[1]
          setCookie("uid",uid[1],1)
        }else{
          if(getCookie("uid")){
            this.user.uid = getCookie("uid")
          }else{
            console.log("未登陆！！！")
          }
        }
        if(did && did.length >= 2){
          this.user.deviceId = did[1]
          setCookie("did",did[1],1)
        }else{
          if(getCookie("did")){
            this.user.deviceId = getCookie("did")
          }else{
            console.log("未登陆！！！")
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
  margin: 0.25rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
