<template>
  <div class="indexWrapper">
    <leftSide class="left" />
    <rightSide class="right" />
    <mapBg class="mapBg" />
    <div class="numPadWrapper">
      <numPad class="numPad" title="确诊病例" numString="24378" addNum="3908" />
      <numPad class="numPad" title="疑似病例" numString="23260" addNum="3971" />
      <numPad class="numPad" title="治愈病例" numString="902" addNum="272" />
      <numPad class="numPad" title="死亡病例" numString="491" addNum="66" />
    </div>
  </div>
</template>

<script>
import leftSide from "./components/leftSide.vue";
import rightSide from "./components/rightSide.vue";
import mapBg from "@/components/mapBg.vue";
import numPad from "@/components/numPad.vue";
export default {
  name: "index",
  components: {
    leftSide,
    rightSide,
    mapBg,
    numPad
  }
};
</script>
 
<style lang="scss" scoped>
.indexWrapper {
  .left {
    position: absolute;
    left: 0;
    z-index: 1;
    top: 4vw;
  }
  .right {
    position: absolute;
    right: 1vw;
    z-index: 1;
    top: 4vw;
  }
  .mapBg {
    width: 100vw;
    height: 100vh;
    z-index: 0;
    /*    background-image: linear-gradient(0deg, #000000 0%, #000000 100%); */
  }
  .numPadWrapper {
    display: flex;
    position: absolute;
    top: 4vw;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
}
</style>
<style lang="scss">
.numPad {
  &:nth-child(1) {
    .numList {
      color: #fb2c4b;
    }
  }
  &:nth-child(2) {
    .numList {
      color: #ffff00;
    }
  }
  &:nth-child(3) {
    .numList {
      color: #00ff06;
    }
  }
  &:nth-child(4) {
    .numList {
      color: #c7c7c7;
    }
  }
}
</style>