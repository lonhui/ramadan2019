<template>
  <div id="problem">
    <!-- 答题页面 -->
    <div class="problem_blac">
      <div class="problem">
        <div class="title">{{title}}</div>
        <div class="content">{{topic}}</div>
      </div>
    </div>
    <div class="optionBox">
      <p class="text">Kamu Hanya Bisa Memilih Sekali.</p>
      <div
        :class="{'optionList':optionList[0].value.length<20,'optionList2':optionList[0].value.length>20}"
      >
        <div
          class="option butt"
          v-for="(item,index) in optionList"
          :key="item.id"
          @click="select(item,index)"
        >
          <div class="optionTop">{{item.value}}</div>
          <div class="optionBottom">{{item.key}}</div>
          <div :class="{'mask':true,'maskColor':item.selectStatus === false}"></div>
        </div>
      </div>
    </div>
    <transition name="bounce">
      <successDialog v-show="sucDialogShow" @on-close="closeDialog"></successDialog>
    </transition>
    <transition name="bounce">
        <errorDialog v-show="errDialogShow" @on-close="closeDialog"></errorDialog>
    </transition>
  </div>
</template>

<script>
import successDialog from "./components/successDialog";
import errorDialog from "./components/errorDialog";
import {verifyAnswer} from "@/api/index"
import {getCookie} from "@/util/Cookie"

export default {
  data() {
    return {
      sucDialogShow: false,
      errDialogShow: false,
      title:'',//标题
      topic:'',//题目
      answerResult:null,//答题结果，ture为答题正确，false为答题错误
      optionList: [
        {
          id: 1,
          key: "A",
          value: "Madinah",
          selectStatus: false
        },
        {
          id: 2,
          key: "B",
          value: "Mekkah",
          selectStatus: false
        }
      ]
    };
  },
  components: {
    successDialog,
    errorDialog
  },
  created() {
    console.log(this.$router.currentRoute.params.data)
    if(this.$router.currentRoute.params.data){
      let item = this.$router.currentRoute.params.data
      let title = item.num
      document.title = title
      this.title = title
      this.topic = item.title
      this.optionList[0].value = item.text1
      this.optionList[1].value = item.text2
    }else{
      this.$router.push("/list");
    }
  },
  methods: {
    closeDialog() {
      this.sucDialogShow = false;
      this.errDialogShow = false;
      this.$router.push({name:'Answer',params:{data:this.$router.currentRoute.params.data}})
    },
    select(item, index) {
      let data = {
        uid:getCookie("uid"),
        problemId:this.$router.currentRoute.params.data.id,
        chooseNum:item.id
      }
      verifyAnswer(data).then( res =>{
        console.log(res)
        if(res.code === 0){
          this.optionList[index].selectStatus = true;
          this.$router.currentRoute.params.data.corret = res.data.corret
          this.$router.currentRoute.params.data.corretComment = res.data.corretComment
          if(res.data.corret){
            this.answerResult = true;
            this.sucDialogShow = true;
          }else{
            this.answerResult = false;
            this.errDialogShow = true;
          }
        }
      }).catch( error => {

      })
    }
  }
};
</script>

<style scoped>
#problem{
  font-family:OpenSans;
}
.problem_blac {
  background-color: #f6f6f6;
  padding: 0.18rem;
}
.title {
  height: 0.34rem;
  border-radius: 0.05rem 0.05rem 0 0;
  background: url("../../../static/images/quiz_bg_green@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding-left: 0.17rem;
  color: #fff;
  font-size: 0.16rem;
}
.content {
  padding: 0.35rem 0.17rem 0.35rem 0.17rem;
  text-align: center;
  background-color: #fff;
  font-size: 0.14rem;
  border-radius: 0 0 0.05rem 0.05rem;
  -moz-box-shadow: 0.02rem 0.02rem 0.05rem #333333;
  -webkit-box-shadow: 0.02rem 0.02rem 0.05rem #333333;
  box-shadow: 0.02rem 0.02rem 0.05rem #333333;
}
.optionBox {
  width: 3.6rem;
  height: 4.87rem;
  background: url("../../../static/images/quiz_bg@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.text {
  padding-top: 0.22rem;
  text-align: center;
  font-size: 0.12rem;
}
.optionList {
  margin-top: 0.42rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.optionList .option {
  width: 1.2rem;
  height: 1.1rem;
  line-height: 0.2rem;
  border-radius: 0.06rem;
  -moz-box-shadow: 0.02rem 0.02rem 0.05rem #333333;
  -webkit-box-shadow: 0.02rem 0.02rem 0.05rem #333333;
  box-shadow: 0.02rem 0.02rem 0.05rem #333333;
}
/* ---------- */
.optionList2 {
  margin-top: 0.42rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
.optionList2 .option {
  height: 1.1rem;
  line-height: 0.2rem;
  border-radius: 0.06rem;
  margin-bottom: 0.25rem;
  -moz-box-shadow: 0.02rem 0.02rem 0.05rem #333333;
  -webkit-box-shadow: 0.02rem 0.02rem 0.05rem #333333;
  box-shadow: 0.02rem 0.02rem 0.05rem #333333;
}
/* ---------- */
.optionTop {
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
.optionBottom {
  height: 0.35rem;
  font-size: 0.18rem;
  color: #fff;
  background: url("../../../static/images/quiz_bg_green@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 0 0 0.06rem 0.06rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.option {
  position: relative;
}
.mask {
  width: 100%;
  height: 1.1rem;
  border-radius: 0.06rem;
  position: absolute;
  top: 0;
}
.maskColor {
  background-color: rgba(255, 255, 255, 0.7);
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
