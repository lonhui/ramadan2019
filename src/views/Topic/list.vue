<template>
  <div id="list">
    <!-- 列表页面 -->
    <div class="listBox">
      <!-- 1当前，2过去，3未来 -->
      <div
        :class="{
            'item':true,
            'itemColor1':item.canSHowProbelm === 1 && !item.hasChoose,
            'itemColor2':item.canSHowProbelm === 1 && item.hasChoose,
            'itemColor3':item.canSHowProbelm === 0
            }"
        v-for="(item,index) in list"
        :key="item.id"
      >
        <div class="itemHeader">{{item.num}}</div>
        <div class="content">
          <div class="topic">{{item.dec}}</div>
          <div
            class="button butt"
            @click="goto(item,index)"
          >{{item.hasChoose ? "Jawaban Trivia" : "Ikutan"}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questionsList } from "@/api/index";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取列表数据
    getList() {
      questionsList()
        .then(res => {
          if (res.code === 0) {
            let list = res.data.problemInfos;
            list.forEach((item, index, arr) => {
              item.dec =
                item.title.split(" ")[0] + " " + item.title.split(" ")[1];
              item.num = "QUIZ " + (index < 9 ? "0" + (index + 1) : index + 1);
            });
            this.list = list;
            console.log(list);
          }
        })
        .catch(error => {});
    },
    // 验证答题状态，跳转
    goto(item, index) {
      item.serialNum = index;
      if (item.canSHowProbelm === 1) {
        if (item.hasChoose) {
          this.$router.push({ name: "Answer", params: { data: item } });
        } else {
          this.$router.push({ name: "Problem", params: { data: item } });
        }
      }
    }
  }
};
</script>

<style scoped>
#list {
  width: 3.6rem;
  height: 8.1rem;
  background: url("../../../static/images/capingvcr_thrcaping_bgpanjang@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-family: OpenSans;
}
.listBox {
  padding: 0.17rem;
}

/* item不同状态共同样式 */
.item {
  height: 0.67rem;
  border-radius: 0.05rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  -moz-box-shadow: 2px 2px 3px #333333;
  -webkit-box-shadow: 2px 2px 3px #333333;
  box-shadow: 2px 2px 3px #333333;
}
.item .itemHeader {
  height: 50%;
  padding-left: 0.17rem;
  font-size: 0.16rem;
  border-radius: 0.05rem 0.05rem 0 0;
  display: flex;
  align-items: center;
}
.item .content {
  padding-left: 0.17rem;
  padding-right: 0.05rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item .topic {
  line-height: 0.32rem;
  font-size: 0.16rem;
}
.item .button {
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  line-height: 0.15rem;
  height: 0.15rem;
  font-size: 0.1rem;
  border-radius: 0.05rem;
  align-self: center;
}
/* item不同状态样式 */
/* 样式1 正在进行*/
.itemColor1 .itemHeader {
  color: #fff;
  background: url("../../../static/images/quiz_bg_green@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.itemColor1 .topic {
  color: #82c345;
}
.itemColor1 .button {
  color: #fff;
  background-color: #af1919;
}
/* 样式2 过去*/
.itemColor2 .itemHeader {
  color: #fff;
  background: url("../../../static/images/quiz_bg_green@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.itemColor2 .topic {
  color: #82c345;
}
.itemColor2 .button {
  color: #fff;
  background-color: #82c345;
}
/* 样式3 未来*/
.itemColor3 .itemHeader {
  color: rgba(0, 0, 0, 0.3);
  background: url("../../../static/images/quiz_bg_white@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.itemColor3 .topic {
  color: rgba(0, 0, 0, 0.3);
}
.itemColor3 .button {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
