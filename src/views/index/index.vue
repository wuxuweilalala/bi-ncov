<template>
  <div class="indexWrapper">
    <leftSide class="left" />
    <rightSide class="right" :addNumArray="addNumArray" />
    <mapBg class="mapBg" />
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
      numString1:"",
      numString2:"",
      numString3:"",
      numString4:"",
      addNum1:"",
      addNum2:"",
      addNum3:"",
      addNum4:"",
      addNumArray:[],
      sevenData:[]
    }
  },
  created() {
  this.getSituation();
  this.get7DayData();
  },
  methods: {
    getSituation(){
      this.axios.get("https://demodev.24e.co/wuhan/getSituation").then(res=>{
        this.numString1 = res.data[0].toString()
        this.numString2 = res.data[4].toString()
        this.numString3 = res.data[2].toString()
        this.numString4 = res.data[3].toString()
      })
    },
    get7DayData(){
      this.axios.get("https://demodev.24e.co/wuhan/get7DayData").then(res=>{
        const data = res.data.Tendency.seriesData;
        this.addNum1 = data[0].value[data[0].value.length -1] - data[0].value[data[0].value.length -2];
        this.addNum2 = data[4].value[data[4].value.length -1] - data[4].value[data[4].value.length -2];
        this.addNum3 = data[2].value[data[2].value.length -1] - data[2].value[data[2].value.length -2];
        this.addNum4 = data[3].value[data[3].value.length -1] - data[3].value[data[3].value.length -2];
        this.addNumArray = [this.addNum1,this.addNum2,this.addNum3,this.addNum4]
      })
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
