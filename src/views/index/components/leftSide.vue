<template>
  <div class="leftSide">
    <div class="leftTitle">
      <div class="titleWrapper">
        <titleHeader
          :title="titleTime"
          englishTitle="2020.02.05 Statistics of epidemic situation by province"
        />
      </div>
      <div class="borderLeft"></div>
    </div>
    <div class="intro">
      <span class="leftIntro">各省市</span>
      <div class="rightIntro">
        <div class="introList">
          <div class="colorBg1"></div>
          <span>确诊</span>
        </div>
        <div class="introList">
          <div class="colorBg2"></div>
          <span>治愈</span>
        </div>
        <div class="introList">
          <div class="colorBg3"></div>
          <span>死亡</span>
        </div>
      </div>
    </div>
    <div class="barCharts">
      <div class="chartList" >
        <stackBar class="stackBar" :options="barOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import stackBar from "@/components/stackBar.vue";
import titleHeader from "@/components/titleHeader.vue";
import { timeFormatter } from "@/utils/utils.js";
export default {
  name: "leftSide",
  components: {
    stackBar,
    titleHeader
  },
  data() {
    return {
      titleTime:'',
      barOptions: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },

        legend: {
          show: false,
          data: ["确诊", "治愈", "死亡"]
        },
        grid: {
          left: "-10%",
          top: "98%",
          bottom: "98%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          show: false
        },
        yAxis: {
          type: "category",
          inverse: true,
          show: false,
          data: [],
        },
        series: [
          {
            name: "确诊",
            type: "bar",
            color: "#fb2c4b",
            barWidth: 5,
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: [0, '-20'],
                textStyle: {
                  fontSize: 12,
                  color: '#fff',
                },
                formatter: function(data){
                  return `${data.dataIndex+1}     ${data.name}`;
                }
              }
            },
            data: []
          },
          {
            name: "治愈",
            type: "bar",
            color: "#00ff06",
            barWidth: 5,
            stack: "总量",
            data: []
          },
          {
            name: "死亡",
            type: "bar",
            color: "#c7c7c7",
            barWidth: 5,
            stack: "总量",
            data: []
          }
        ]
      },
      barArray:[]
    };
  },
  beforeMount() {
    let time = timeFormatter({ prefix: true });
    this.titleTime = time.date + '各省市区疫情统计';
    this.getTrend()
  },
  methods:{
    getTrend(){
      this.axios.get("https://demodev.24e.co/wuhan/getTrend").then(res=>{
        for(let i of res.data.inland.slice(0,18)) {
          this.barOptions.series[0].data.push(i.value) ;
          this.barOptions.series[1].data.push(i.cureNum) ;
          this.barOptions.series[2].data.push(i.deadNum) ;
          this.barOptions.yAxis.data.push(i.name)  ;
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.leftSide {
  margin-left: 1.9vw;
  .leftTitle {
    .titleWrapper {
      display: flex;
      flex-direction: column;
      .chinese {
        font-size: 0.8vw;
        /*  color:#fff; */
      }
      .english {
        font-size: 0.5vw;
        color: #858a8d;
        margin-top: 0.3vw;
        margin-bottom: 0.7vw;
      }
    }
  }
  .intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.9vw;
    width: 16vw;
    height: 1.4vw;
    padding: 0.4vw 0.6vw;
    background-color: rgba(0, 255, 255, 0.1);
    color: #fff;
    .leftIntro {
      font-size: 0.6vw;
    }
    .rightIntro {
      display: flex;
      align-items: center;
      .introList {
        display: flex;
        align-items: center;
        margin-left: 1vw;
        .colorBg1 {
          width: 0.3vw;
          height: 0.3vw;
          background-color: rgba(251, 44, 75, 1);
        }
        .colorBg2 {
          width: 0.3vw;
          height: 0.3vw;
          background-color: rgb(0, 255, 6);
        }
        .colorBg3 {
          width: 0.3vw;
          height: 0.3vw;
          background-color: rgb(199, 199, 199);
        }
        span {
          margin-left: 0.3vw;
          font-size: 0.6vw;
        }
      }
    }
  }
  .barCharts {
    .chartList {
      .chartsTitle {
        color: #fff;
      }
      .stackBar {
        width: 16vw;
        height: 40vw;
      }
    }
  }
}
</style>
