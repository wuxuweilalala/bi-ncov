<template>
  <div class="indexWrapper">
    <leftSide class="left"  ref="leftCharts"/>
    <rightSide class="right" :numArr="numArr" />
    <mapBg class="mapBg" @changeNum="changeNum"/>
    <div class="numPadWrapper">
      <numPad class="numPad" title="确诊病例" :numString="numString1" :addNum="addNum1" />
      <numPad class="numPad" title="疑似病例" :numString="numString2" :addNum="addNum2" />
      <numPad class="numPad" title="治愈病例" :numString="numString3" :addNum="addNum3" />
      <numPad class="numPad" title="死亡病例" :numString="numString4" :addNum="addNum4" />
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
  },
  data(){
    return {
      addNumArray:[],
      sevenData:[],
      currentIndex:undefined,
      dayData:[]
    }
  },
  computed: {
    numArr(){
      return [this.dayData.length === 0? '': this.dayData[0].value[this.currentIndex],this.dayData.length === 0? '': this.dayData[4].value[this.currentIndex],this.dayData.length === 0? '': this.dayData[2].value[this.currentIndex],this.dayData.length === 0? '': this.dayData[3].value[this.currentIndex]]
    },
    numString1(){
      return this.dayData.length === 0? '': this.dayData[0].value[this.currentIndex].toString()
    },
    numString2(){
      return this.dayData.length === 0? '': this.dayData[4].value[this.currentIndex].toString()
    },
    numString3(){
      return this.dayData.length === 0? '': this.dayData[2].value[this.currentIndex].toString()
    },
    numString4(){
      return this.dayData.length === 0? '': this.dayData[3].value[this.currentIndex].toString()
    },
    addNum1(){
      return this.dayData.length === 0 ? 0 : this.dayData[0].value[this.currentIndex] - this.dayData[0].value[this.currentIndex -1]
    },
    addNum2(){
      return this.dayData.length === 0 ? 0 : this.dayData[4].value[this.currentIndex] - this.dayData[4].value[this.currentIndex -1]
    },
    addNum3(){
      return this.dayData.length === 0 ? 0 : this.dayData[2].value[this.currentIndex] - this.dayData[2].value[this.currentIndex -1]
    },
    addNum4(){
      return this.dayData.length === 0 ? 0 : this.dayData[3].value[this.currentIndex] - this.dayData[3].value[this.currentIndex -1]
    },
  },
  created() {
    this.get7DayData();
  },
  methods: {
    get7DayData(){
      this.axios.get("https://demodev.24e.co/wuhan/get7DayData").then(res=>{
        const data = res.data.Tendency.seriesData;
        this.dayData = data;
        this.currentIndex = data[0].value.length -1;
        this.addNumArray = [this.addNum1,this.addNum2,this.addNum3,this.addNum4]
      })
    },
    changeRange(){
      this.$refs.leftCharts.changeCharts();
    },
    changeNum(index) {
      this.currentIndex = index
    }
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
