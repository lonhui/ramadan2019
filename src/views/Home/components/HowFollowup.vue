<template>
  <div id="followup">
    <div class="box">
      <img class="titleImg" src="@/assets/title_thecaping.png" alt>
      <p class="title">Cara Ikutan</p>
      <ul>
        <li>Periode event 29 Mei -7 Juni 2019.</li>
        <li>Ikuti kuis hariannya dan kamu yang menjawab kuis dengan benar akan berkesempatan dapetin THR dari Caping setiap harinya.</li>
        <li>Cara lengkapnya, silahkan baca syarat & ketentuan ya!</li>
      </ul>
      <div class="button" @click="close">Ikuti Quiz</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("on-close");
    }
  }
};
</script>

<style scoped>
#followup {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 17, 27, 0.8);
}
.box {
  width: 2.75rem;
  height: 2.5rem;
  border-radius: 0.08rem;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 2rem;
  position: relative;
}
.titleImg {
  width: 1.93rem;
  height: 1.35rem;
  position: absolute;
  top: -1.03rem;
  left: 0.4rem;
}
.title {
  font-size: 0.16rem;
  font-weight: 700;
  text-align: center;
  padding-top: 0.35rem;
}
ul {
  padding: 0.15rem;
  font-size: 0.13rem;
  line-height: 0.2rem;
  list-style-type: decimal;
  margin-left: 0.15rem;
}
.button {
  width: 1.32rem;
  height: 0.31rem;
  font-size: 0.16rem;
  color: #fff;
  border-radius: 0.15rem;
  background-color: #82c345;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -0.16rem;
  left: 0.7rem;
}
</style>
