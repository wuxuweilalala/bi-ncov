<template>
  <div class="rightSide">
    <div class="chartItem">
      <titleHeader title="疫情概况占比图" englishTitle="Epidemic profile ratio chart" />
      <pie
        :valueArr="areaCategoryArr"
        :chartContainerStyle="{
                paddingLeft:'1vw'
              }"
        :legendLineShowState="false"
        :itemStyle="itemStyle"
      ></pie>
    </div>
    <div class="chartItem">
      <titleHeader title="疫情趋势" englishTitle="Outbreak trend" />
      <stackBar :options="lineOptions1" />
    </div>
    <div class="chartItem">
      <titleHeader title="疫情增速趋势" englishTitle="Epidemic growth trend" />
      <stackBar :options="lineOptions2" />
    </div>
    <div class="chartItem">
      <titleHeader title="医院收治排行" englishTitle="Hospital admission ranking" />
      <stackBar :options="barOption" />
    </div>
  </div>
</template>

<script>
import titleHeader from "@/components/titleHeader.vue";
import stackBar from "@/components/stackBar.vue";
import pie from "@/components/pie.vue";
import {
  lineOptions1,
  lineOptions2,
  barOption
} from "../chartOptions/options.js";
export default {
  name: "rightSide",
  components: {
    titleHeader,
    pie,
    stackBar
  },
  data() {
    return {
      areaCategoryArr: [3512, 2001, 1863, 800],
      itemStyle: [
        {
          name: "确诊",
          itemStyle: {
            color: "#00ffff"
          }
        },
        {
          name: "疑似",
          itemStyle: {
            color: "#42f412"
          }
        },
        {
          name: "治愈",
          itemStyle: {
            color: "#0066ff"
          }
        },
        {
          name: "死亡",
          itemStyle: {
            color: "#f62742"
          }
        }
      ],
      lineOptions1,
      lineOptions2,
      barOption
    };
  }
};
</script>

<style lang="scss" scoped>
.rightSide {
  display: flex;
  flex-direction: column;
  .chartItem {
    position: relative;
    /* background-color: rgba(0, 0, 0, 0.5); */
    margin-bottom: 1.6vw;
    &:nth-child(2) {
      .echarts {
        width: 17.8vw;
        height: 9.3vw;
        margin-left: 1vw;
      }
    }
    &:nth-child(3) {
      .echarts {
        width: 17.8vw;
        height: 9.3vw;
        margin-left: 1vw;
      }
    }
    &:nth-child(4) {
      .echarts {
        width: 18.9vw;
        height: 8vw;
        margin-left: 1vw;
      }
    }
  }
}
</style>