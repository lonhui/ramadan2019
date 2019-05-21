<template>
  <div id="list">
    <!-- 列表页面 -->
    <div class="listBox">
      <!-- 1当前，2过去，3未来 -->
      <div
        :class="{'item':true,'itemColor1':item.type === 1,'itemColor2':item.type === 2,'itemColor3':item.type === 3}"
        v-for="item in list"
        :key="item.id"
      >
        <div class="itemHeader">{{item.title}}</div>
        <div class="content">
          <div class="topic">{{item.topic}}</div>
          <div class="button butt" @click="goto(item)">{{item.type === 2 ? "Jawaban Trivia" : "Ikutan"}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "QUIZ 01",
          topic: "xxxxxxx",
          type: 2
        },
        {
          id: 2,
          title: "QUIZ 02",
          topic: "xxxxxxx",
          type: 1
        },
        {
          id: 3,
          title: "QUIZ 03",
          topic: "xxxxxxx",
          type: 3
        },
        {
          id: 4,
          title: "QUIZ 04",
          topic: "xxxxxxx",
          type: 3
        },
        {
          id: 5,
          title: "QUIZ 05",
          topic: "xxxxxxx",
          type: 3
        },
        {
          id: 6,
          title: "QUIZ 06",
          topic: "xxxxxxx",
          type: 3
        },
        {
          id: 7,
          title: "QUIZ 07",
          topic: "xxxxxxx",
          type: 3
        },
        {
          id: 8,
          title: "QUIZ 08",
          topic: "xxxxxxx",
          type: 3
        },
        {
          id: 9,
          title: "QUIZ 09",
          topic: "xxxxxxx",
          type: 3
        },
        {
          id: 10,
          title: "QUIZ 10",
          topic: "xxxxxxx",
          type: 3
        }
      ]
    };
  },
  created(){
    console.log("获取列表数据请求！！！")
  },
  methods:{
     goto(item){
        switch(item.type){
          case 1:// 当前
            this.$router.push('/problem')
            break;
          case 2:// 过去
            this.$router.push('/answer')
            break;
          case 3:// 未来
            break;
        }
     }
  }
};
</script>

<style scoped>
#list {
  width: 3.6rem;
  /* height: 7.5rem; */
  background: url("../../../static/images/capingvcr_thrcaping_bgpanjang@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
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
  -moz-box-shadow:2px 2px 3px #333333; 
  -webkit-box-shadow:2px 2px 3px #333333; 
  box-shadow:2px 2px 3px #333333;
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
