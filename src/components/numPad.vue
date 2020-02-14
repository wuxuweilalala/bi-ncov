<template>
  <div class="numPad">
    <div class="numTop">
      <span class="numTitle">{{title}}</span>
      <div class="numRight">
        <img class="arrow" src="../assets/imgs/arrow.svg" />
        <span class="addNum">{{addNum}}</span>
      </div>
    </div>
    <div class="numBottom">
      <num :numString="numString" />
    </div>
  </div>
</template>

<script>
import num from "./num.vue";
export default {
  name: "numPad",
  props: ["title", "numString", "addNum"],
  components: {
    num
  }
};
</script>

<style lang="scss" scoped>
.numPad {
  margin-right: 2.6vw;
  .numTop {
    display: flex;
    align-items: center;
    margin-bottom: 0.6vw;
    .numTitle {
      font-size: 0.8vw;
      color: #fff;
      margin-right: 0.7vw;
    }
    .numRight {
      .addNum {
        font-size: 0.6vw;
        color: #fb2c4b;
      }
      .arrow {
        width: 0.3vw;
        height: 0.6vw;
        margin-right: 0.3vw;
      }
    }
  }
}
</style>