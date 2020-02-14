<template>
  <vECharts :options="polar" />
</template>

<script>
import vECharts from "vue-echarts";
import "../../node_modules/echarts/map/js/world.js";
export default {
  name: "mapBg",
  components: {
    vECharts
  },
  data() {
    return {
      polar: {
        backgroundColor: "rgb(1,16,24)",
        tooltip: {
          trigger: "item"
        },
        geo: {
          map: "world",
          zoom: 5,
          label: {
            emphasis: {
              show: true,
              color: "#fff"
            }
          },
          center: [115.97, 29.71],
          roam: true,
          /*   silent: true, */
          itemStyle: {
            normal: {
              areaColor: "rgb(0,30,41)",
              borderColor: "#000"
            },
            emphasis: {
              areaColor: "#3E98FE"
            }
          }
        }
        /*       series: [
          {
            name: "校友人数",
            type: "map",
            mapType: "world",
            itemStyle: {
              normal: {
                borderWidth: 0.5,
                borderColor: "rgb(0,46,72)",
                areaStyle: {
                  color: "red"
                }
              },
              emphasis: {
                areaColor: "#3E98FE",
                borderColor: "#fff",
                borderWidth: 0
              }
            },
            mapLocation: {
              y: 100
            },
            data: [],
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            }
          }
        ] */
      }
    };
  }
};
</script>

<style>
</style>