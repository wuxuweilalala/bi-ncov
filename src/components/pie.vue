<template>
  <div class="chartContainer" :style="chartContainerStyle">
    <div class="chartBody">
      <div class="label allCenter2">
        <div class="default" v-show="showDefaultLabel">
          <p class="percent">{{getDefaultLabelValue}}</p>
          <p class="name">{{defaultName}}</p>
        </div>
        <div class="hover" v-show="!showDefaultLabel">
          <p
            class="value"
            :style="{
                        color:this.hoverColor
                      }"
          >{{getHoverLabelVal}}</p>
          <p class="name">{{hoverName}}</p>
        </div>
      </div>
      <vECharts ref="ecInstance" :options="options"></vECharts>
    </div>
    <div class="legend" @mouseenter="stopAnimate" @mouseleave="startAnimate">
      <div
        class="item"
        @mouseenter="showHoverValue(item,valueArr[index])"
        @mouseleave="hideHoverValue"
        v-for="(item,index) in itemStyle"
        :key="index"
      >
        <span
                class="circle"
                :style="{
                    backgroundColor:item.itemStyle.color
                }"
        />
        <span class="name">{{item.name}}</span>
        <span class="line"/>
        <span class="num">{{(valueArr[index] / (valueArr[0]+valueArr[1]+valueArr[2]+valueArr[3])*100).toFixed(2)}} %</span>
        <span class="num"  :style="{
                    color:item.itemStyle.color
                }">{{addArr[index]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import vECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import { sum, set as _set } from "lodash";

export default {
  name: "customerPie",
  props: {
    valueArr: Array,
    itemStyle: Array,
    addArr:Array,
    chartContainerStyle: Object,
    legendLineShowState: {
      type: Boolean,
      default: true
    },
    labelType: {
      type: String,
    }
  },
  components: {
    vECharts
  },
  data() {
    return {
      pieSelectTimer: null,
      defaultPercent: 0,
      defaultValue: 0,
      totalValue:0,
      defaultName: "",
      hoverPercent: 0,
      hoverValue: 0,
      hoverName: "",
      hoverColor: "",
      showDefaultLabel: true,
      options: {
        backgroundColor: "transparent",
        series: [
          {
            type: "pie",
            radius: ["72%", "80%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            selectedMode: "single",
            selectedOffset: 5,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
              value:this.valueArr[0],
              itemStyle:{
                color: '#fb2c4b'
              }
            },{
              value:this.valueArr[1],
              itemStyle:{
                color: '#ffff00'
              }
            },{
              value:this.valueArr[2],
              itemStyle:{
                color: '#00ff06'
              }
            },{
              value:this.valueArr[3],
              itemStyle:{
                color: '#c7c7c7'
              }
            }]
          },
          {
            name: "innerCircle",
            type: "pie",
            radius: ["60%", "68%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            itemStyle: {
              color: "red"
            },
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: []
          }
        ]
      },
      pieSelectName: "",
      pieSelectIndex: 0
    };
  },
  methods: {
    showHoverValue(item, value) {
      let count = sum(this.valueArr);
      this.showDefaultLabel = false;
      this.hoverPercent = ((value / count) * 100).toFixed(2);
      this.hoverValue = value;
      this.hoverName = item.name;
      this.hoverColor = item.itemStyle.color;
    },
    hideHoverValue() {
      this.showDefaultLabel = true;
    },
    stopAnimate() {
      window.clearInterval(this.pieSelectTimer);
      this.$refs.ecInstance.dispatchAction({
        name: this.pieSelectName,
        type: "pieUnSelect"
      });
    },
    startAnimate() {
      let vm = this;
      vm.pieSelectTimer = setInterval(() => {
        let dataLength = vm.itemStyle.length;
        let index = vm.pieSelectIndex % dataLength;
        let name = vm.itemStyle[index].name;
        vm.$refs.ecInstance.dispatchAction({
          type: "pieSelect",
          // 图例名称
          name: name
        });
        vm.pieSelectName = name;
        // this.
        vm.showHoverValue(vm.itemStyle[index], vm.valueArr[index]);
        vm.pieSelectIndex += 1;

      }, 3000);
    }
  },
  computed: {
    getDefaultLabelValue() {
      return  this.defaultValue;
    },
    getHoverLabelVal() {
      return this.labelType === "percent" ? this.hoverPercent : this.hoverValue;
    }
  },
  watch: {
    options: {
      deep: true,
      immediate: true,
      handler() {
        let count = sum(this.valueArr);
        this.defaultValue = this.valueArr[0];
        this.defaultPercent = ((this.valueArr[0] / count) * 100).toFixed(2);
        this.defaultName = this.itemStyle[0].name;

      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.startAnimate();
      // this.$refs.ecInstance
    });
  },
  beforeDestroy() {
    window.clearInterval(this.pieSelectTimer);
  }
};
</script>

<style scoped
  lang="scss">
/* .chartContainer {
  padding-top: 1vw;
} */

.chartBody {
  position: relative;
  float: left;
  width: 7.4vw;
  height: 7.4vw;
  margin-right: 1.5vw;
  /*padding-bottom: 1vw;*/

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > div {
      p {
        text-align: center;
        position: relative;
      }

      .value {
        font-family: DM;
        font-size: 1vw;
        color: #00ffff;

        .symbol {
          font-size: 0.6vw;
        }
      }

      .name {
        font-size: 0.6vw;
        color: #fff;
      }
    }
  }
}

.legend {
  padding-top: 1vw;
  padding-bottom: 1.4vw;
  float: left;
  display: flex;
  flex-direction: column;
  /*height: 7.4vw;*/
  width: 8.9vw;
  /*background-color: red;*/
  .item {
    cursor: pointer;
    display: flex;
    width: 100%;
    margin-bottom: 0.8vw;
    flex: 1;

    .circle {
      margin-right: 0.5vw;
      border-radius: 50%;
      display: block;
      width: 0.4vw;
      height: 0.4vw;
    }

    .name {
      line-height: 0.5vw;
      color: #fff;
      font-size: 0.6vw;
    }

    .line {
      flex-grow: 1;
      position: relative;
      margin: 0 0.5vw;

      &:before {
        width: 100%;
        height: 0.0625vw;
        left: 0;
        bottom: 0;
        background: #2dbef6;
        display: block;
        content: "";
        position: absolute;
      }
    }

    .num {
      line-height: 0.5vw;
      color: #fff;
      font-size: 0.6vw;
      margin-right: 0.5vw;
    }
  }
}

.chartContainer .echarts {
  width: 100%;
  height: 100%;
  background: url("~@/assets/imgs/circleBg.png") no-repeat;
  background-size: 100% 100%;
}
</style>
