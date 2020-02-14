<template>
  <div class="num">
    <div class="numList" v-for="(list,index) in numString" :key="index">{{list}}</div>
    <span class="unit">人</span>
  </div>
</template>

<script>
export default {
  name: "num",
  props: ["numString"]
};
</script>

<style lang="scss" scoped>
.num {
  display: flex;
  align-items: flex-end;
  .numList {
    padding: 0.5vw;
    margin-right: 0.5vw;
    background-image: url("~@/assets/imgs/numBg.png");
    background-size: 100% 100%;
  }
  .unit {
    font-size: 0.6vw;
    color: #fff;
  }
}
</style>