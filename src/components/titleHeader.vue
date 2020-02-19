<template>
  <div class="titleHeader">
    <span>{{title}}</span>
    <p>{{englishTitle}}</p>
    <div class="borderLeft"></div>
  </div>
</template>

<script>
export default {
  name: "titleHeader",
  props: ["title", "englishTitle"]
};
</script>

<style lang="scss" scoped>
.titleHeader {
  position: relative;
  margin-bottom: 0.2vw;
  span {
    font-size: 0.8vw;
    margin-left: 0.3vw;
    color: #fff;
  }
  p {
    font-size: 0.5vw;
    color: #858a8d;
  }
  .borderLeft {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.4vw;
    height: 0.4vw;
    border-top: 0.2vw solid #06ffff;
    border-left: 0.2vw solid #06ffff;
  }
}
</style>
