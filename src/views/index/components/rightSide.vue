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
        :addArr="addArr"
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
  import {barOption} from "../chartOptions/options.js";

  export default {
  name: "rightSide",
  components: {
    titleHeader,
    pie,
    stackBar
  },
  props:['numArr'],
  data() {
    return {
      areaCategoryArr: [77059, 4149, 23359, 2446],
      itemStyle: [
        {
          name: "确诊",
          itemStyle: {
            color: "#fb2c4b"
          }
        },
        {
          name: "疑似",
          itemStyle: {
            color: "#ffff00"
          }
        },
        {
          name: "治愈",
          itemStyle: {
            color: "#00ff06"
          }
        },
        {
          name: "死亡",
          itemStyle: {
            color: "#c7c7c7"
          }
        }
      ],
      lineOptions1:{
        tooltip: {
          trigger: "axis"
        },
        dataZoom: [{
          type: 'inside',
          zoomOnMouseWheel: false,
          startValue: 0,
          endValue: 6
        }],
        legend: {
          icon: "rect",
          itemGap: 3,
          top: "",
          right: "0",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          data: ["确诊", "疑似", "治愈", "死亡"]
        },
        background: "transparent",
        grid: {
          left: "0%",
          right: "4%",
          top: "25%",
          containLabel: true
        },
        height: "70%",
        xAxis: {
          type: "category",
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#858a8d"
            }
          },
          axisLabel: {
            fontSize: 10
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          name: "病例",
          nameTextStyle: {
            color: "#858a8d"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#858a8d"
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            fontSize: 10
          }
        },
        series: [
          {
            name: "确诊",
            type: "line",
            color: "#fb2c4b",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "疑似",
            type: "line",
            color: "#ffff00",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "治愈",
            type: "line",
            color: "#00ff06",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "死亡",
            type: "line",
            color: "#c7c7c7",
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      },
      lineOptions2:{
        tooltip: {
          trigger: "axis"
        },
        dataZoom: [{
          type: 'inside',
          zoomOnMouseWheel: false,
          startValue: 0,
          endValue: 6
        }],
        legend: {
          icon: "rect",
          itemGap: 3,
          top: "",
          right: "0",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          data: ["确诊增速", "疑似增速", "治愈增速", "死亡增速"]
        },
        background: "transparent",
        grid: {
          left: "3%",
          right: "4%",
          top: "25%",
          containLabel: true
        },
        height: "70%",
        xAxis: {
          type: "category",
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#858a8d"
            }
          },
          axisLabel: {
            fontSize: 10
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          name: "增长率(%)",
          nameTextStyle: {
            color: "#858a8d"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#858a8d"
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            fontSize: 10
          }
        },
        series: [
          {
            name: "确诊增速",
            type: "line",
            color: "#fb2c4b",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "疑似增速",
            type: "line",
            color: "#ffff00",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "治愈增速",
            type: "line",
            color: "#00ff06",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "死亡增速",
            type: "line",
            color: "#c7c7c7",
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      },
      barOption,
      addArr:[]
    };
  },
  mounted(){
   this.get7DayData();
  },
  methods:{
    get7DayData(){
      this.axios.get("https://demodev.24e.co/wuhan/get7DayData").then(res=>{
        this.addArr = [res.data.Speed.seriesData[0].value[res.data.Tendency.xData.length - 1] + '%', res.data.Speed.seriesData[4].value[res.data.Tendency.xData.length - 1] + '%', res.data.Speed.seriesData[2].value[res.data.Tendency.xData.length - 1] + '%', res.data.Speed.seriesData[3].value[res.data.Tendency.xData.length - 1] + '%'];
        let data = res.data.Tendency
        this.areaCategoryArr = [data.seriesData[0].value[data.seriesData[0].value.length -1], data.seriesData[4].value[data.seriesData[4].value.length -1],data.seriesData[2].value[data.seriesData[2].value.length -1],data.seriesData[3].value[data.seriesData[3].value.length -1],];
        this.lineOptions1.xAxis.data = res.data.Tendency.xData;
        this.lineOptions1.series[0].data = res.data.Tendency.seriesData[0].value;
        this.lineOptions1.series[1].data = res.data.Tendency.seriesData[4].value;
        this.lineOptions1.series[2].data = res.data.Tendency.seriesData[2].value;
        this.lineOptions1.series[3].data = res.data.Tendency.seriesData[3].value;
        this.lineOptions2.xAxis.data = res.data.Speed.xData;
        this.lineOptions2.series[0].data = res.data.Speed.seriesData[0].value;
        this.lineOptions2.series[1].data = res.data.Speed.seriesData[4].value;
        this.lineOptions2.series[2].data = res.data.Speed.seriesData[2].value;
        this.lineOptions2.series[3].data = res.data.Speed.seriesData[3].value;
      })
    }
  },
  watch: {
    // numArr: {
    //   immediate: true,
    //   handler(val){
    //     console.log(val);
    //     this.areaCategoryArr = [...val];
    //   }
    // }
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
    margin-bottom: 0.2vw;
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
