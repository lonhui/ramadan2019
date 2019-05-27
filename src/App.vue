<template>
  <div id="app">
    <loading :count="count" v-if="loadingShow"></loading>
    <transition :name="transitionName">
      <keep-alive :include="keepAlive">
        <router-view class="Router" v-wechat-title="$route.meta.title"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import loading from "@/components/loading";
import {dataRecord} from "@/api/index"

export default {
  name: "App",
  data() {
    return {
      count: 0,
      loadingShow: true,
      keepAlive: "main-keep-alive", //需要缓存的页面 例如首页
      transitionName: "slide-right" //初始过渡动画方向
    };
  },
  components: {
    loading
  },
  created() {
    dataRecord({type:2})
    this.preload();
  },
  methods: {
    preload() {
      let imgs = [
        "static/images/capingvcr_bg_thecaping@2x.png",
        "static/images/capingvcr_bg@2x.png",
        "static/images/capingvcr_thrcaping_bgpanjang@2x.png",
        "static/images/quiz_bg@2x.png",
        "static/images/turntable_bg.png",
        "static/images/bg_Layer.png",
        "static/images/bg_turntable.png",
        "static/images/bg@2x.png",
        "static/images/Popups_bg@2x.png",
        "static/images/title_thecaping.png",
        "static/images/word_selamat@2x.png"
      ];
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
        };
      }
      this.loadingShow = false;
    }
  },
  watch: {
    $route(to, from) {
      // 切换动画
      let isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      this.$router.isBack = false;
    }
  }
};
</script>

<style>
/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td {
  /* table elements 表格元素 */
  margin: 0;
  padding: 0;
}
/* 设置默认字体 */
body,button,input,select,
textarea {
  /* for ie */
  /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
  font: 12px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
}
h1 {font-size: 18px; /* 18px / 12px = 1.5 */}
h2 {font-size: 16px;}
h3 {font-size: 14px;}
h4,h5,h6 {font-size: 100%;}
address,cite,dfn,em,var {font-style: normal;} /* 将斜体扶正 */
code,kbd,pre,samp,tt {
  font-family: "Courier New", Courier, monospace;
} /* 统一等宽字体 */
small {
  font-size: 12px;
} /* 小于 12px 的中文很难阅读，让 small 正常化 */
/* 重置列表元素 */
ul,ol {list-style: none;}

/* 重置文本格式元素 */
a {text-decoration: none;}
a:hover {text-decoration: underline;}
abbr[title],
acronym[title] {
  /* 注：1.ie6 不支持 abbr; 2.这里用了属性选择符，ie6 下无效果 */
  border-bottom: 1px dotted;
  cursor: help;
}
q:before,q:after {content: "";}
/* 重置表单元素 */
legend {
  color: #000;
} /* for ie6 */
fieldset,img {
  border: none;
} /* img 搭车：让链接里的 img 无边框 */
/* 注：optgroup 无法扶正 */
button,input,select,textarea {
  font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}
/* 重置表格元素 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* 重置 hr */
hr {
  border: none;
  height: 1px;
}



/* --------------------------------------- */
@font-face {
  font-family: OpenSans;
  src: url("../static/font/OpenSans-Semibold-webfont.ttf");
}

.butt:active {
  opacity: 0.4;
  transform: translateY(4px);
}
.Router {
  position: absolute;
  height: 100%;
  transition: all 0.377s ease;
  will-change: transform;
  top: 0;
  backface-visibility: hidden;
  perspective: 1000;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
