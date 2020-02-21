<template>
  <div class="numPad">
    <div class="numTop">
      <span class="numTitle">{{title}}</span>
      <div class="numRight" v-if="addNum > 0">
        <img class="arrow" src="@/assets/imgs/addArrow.svg" />
        <span class="addNum">{{addNum}}</span>
      </div>
      <div class="numRight" v-if="addNum < 0">
      <img class="arrow deleteArrow" src="@/assets/imgs/deleteArrow.svg" />
      <span class="addNum deleteNum">{{Math.abs(addNum)}}</span>
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
      display: flex;
      align-items: center;
      .addNum {
        font-size: 0.6vw;
        color: #fb2c4b;
      }
      .deleteNum {
        color: #00ff06
      }
      .arrow {
        width: 0.6vw;
        height: 1.2vw;
        margin-right: 0.3vw;
      }
      .deleteArrow {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
