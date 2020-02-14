<template>
  <div class="header">
    <p class="allCenter centerTitle">全天智能-实时新型肺炎数据分析</p>
    <p class="englishTitle">24E - Real-time analysis of novel coronavirusSARI data</p>
    <div class="weatherInfo">
      <div class="item temperature">
        <span class="icon iconfont icon-weather"></span>
        <span class="text">18℃</span>
        <span class="line"></span>
      </div>
      <div class="item humidity">
        <span class="icon iconfont icon-humidity"></span>
        <span class="text">61%</span>
        <span class="line"></span>
      </div>
      <div class="item pm25">
        <span class="icon iconfont icon-pm25"></span>
        <span class="text">2.5</span>
      </div>
    </div>
    <div class="rightSide">
      <span class="cityName"></span>
      <span class="line"></span>
      <span class="time">{{date}} {{nowTime}}</span>
    </div>
  </div>
</template>
<script>
import { timeFormatter } from "@/utils/utils.js";
export default {
  name: "customerHeader",
  data() {
    return {
      timer: null,
      date: "00:00:00",
      nowTime: "2020/01/01"
    };
  },
  beforeMount() {
    this.timer = setInterval(() => {
      let time = timeFormatter({ prefix: true });
      this.date = time.date;
      this.nowTime = time.nowTime;
    }, 1000);
  }
  // beforeDestroy() {
  //     clearInterval(this.timer)
  // }
};
</script>
<style lang="scss"
  scoped>
.header {
  position: absolute;
  top: 0;
  z-index: 1;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 3.4vw;

  background-image: url("~@/assets/imgs/titleBg.png");
  background-size: 100% 100%;
  .centerTitle {
    font-size: 1.1vw;
    letter-spacing: 0.1vw;
    text-shadow: 0.08vw 0.08vw 0 #fff;
    line-height: 1.8vw;
  }
  .englishTitle {
    font-size: 0.7vw;
    color: #647f85;
  }
  .weatherInfo {
    top: 0;
    left: 0.6vw;
    position: absolute;
    line-height: 2.8vw;
    .item {
      float: left;

      span {
        float: left;
      }

      &.temperature .icon {
        font-size: 1.2vw;
      }

      &.humidity .icon {
      }
      &.pm25 .icon {
        font-size: 0.8vw;
      }

      .icon {
        color: #00f0ff;
        font-size: 1vw;
        width: 2vw;
        height: 2vw;
      }

      .text {
        font-size: 0.8vw;
      }
    }
  }
  .rightSide {
    position: absolute;
    right: 1.3vw;
    top: 0;
    font-size: 0.8vw;
    line-height: 2.8vw;
    span {
      float: right;
    }
    .time {
      margin-right: 0.5vw;
    }
  }
}
</style>
