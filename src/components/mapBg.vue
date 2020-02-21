<template>
  <div class="mapWrapper">
    <vECharts :options="polar" id="chartStock" @timelinechanged="changeTime" @click="addBox"/>
    <div id="box" v-show="boxShow">
      <div class="boxTop">
        <div class="name">{{boxName}}</div>
        <div class="boxNumber">
          <div class="boxList"><span class="numberName">确诊/</span><span class="confirm">{{value}}</span></div>
          <div class="boxList"><span class="numberName">治愈/</span><span class="cure">{{cureNum}}</span></div>
          <div class="boxList"><span class="numberName">死亡/</span><span class="death">{{deadNum}}</span></div>
        </div>
      </div>
      <div class="boxBottom">      <stackBar :options="lineOptions1" class="lineChart"/></div>
    </div>
    <div class="changeStyle">
      <div class="grade" @click="changeMode('grade')">
        <div class="gradeImg"></div>
        <div class="gradeText">查看分级分布</div>
      </div>
      <div class="scatter" @click="changeMode('scatter')">
        <div class="scatterImg"></div>
        <div class="scatterText">查看散点分布</div>
      </div>
    </div>
  </div>


</template>

<script>
  import stackBar from "@/components/stackBar.vue";
let img1 = {
  a: require("@/assets/imgs/confirm.png"),
  b: require("@/assets/imgs/left.png"),
  c: require("@/assets/imgs/right.png")
};
import vECharts from "vue-echarts";
import echarts from "echarts";
import "../../node_modules/echarts/map/js/world.js";
import "../../node_modules/echarts/map/js/china.js";
import "../../node_modules/echarts/extension/bmap/bmap.js";
export default {
  name: "mapBg",
  components: {
    vECharts,stackBar
  },
  data() {
    return {
      boxName:'',
      value:undefined,
      cureNum:undefined,
      deadNum:undefined,
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
          data: ["确诊", "治愈", "死亡"]
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
      boxShow:false,
      inlandData:[],
      myChart: null,
      geoCoordMap:{
        海门: [121.15, 31.89],
        日本: [139.691706,35.689487],
        新加坡: [103.819836,1.352083],
        韩国:[127.98,37.66],
        泰国:[100.99, 15.87],
        马来西亚:[101.98,4.21],
        德国:[10.45,51.17],
        越南: [108.28, 14.06],
        澳大利亚: [133.78,-25.27],
        美国:  [-95.71, 37.09],
        法国: [2.21,46.23],
        英国: [-3.44, 55.38],
        阿联酋: [53.85, 23.42],
        加拿大: [-106.35,56.13],
        意大利: [12.57,41.87],
        菲律宾: [121.77,12.88],
        印度: [78.96,20.59],
        俄罗斯: [105.32,61.52],
        西班牙: [-3.75,40.46],
        芬兰: [25.75,61.92],
        瑞典: [18.64,60.13],
        尼泊尔: [84.12,28.39],
        柬埔寨: [105.46,12.00],
        斯里兰卡: [80.77,7.87],
        埃及: [30.80,26.82],
        比利时: [4.47,50.50],
        鄂尔多斯: [109.781327, 39.608266],
        招远: [120.38, 37.35],
        舟山: [122.207216, 29.985295],
        齐齐哈尔: [123.97, 47.33],
        盐城: [120.13, 33.38],
        赤峰: [118.87, 42.28],
        青岛: [120.33, 36.07],
        乳山: [121.52, 36.89],
        金昌: [102.188043, 38.520089],
        泉州: [118.58, 24.93],
        莱西: [120.53, 36.86],
        日照: [119.46, 35.42],
        胶南: [119.97, 35.88],
        南通: [121.05, 32.08],
        拉萨: [91.11, 29.97],
        云浮: [112.02, 22.93],
        梅州: [116.1, 24.55],
        文登: [122.05, 37.2],
        上海: [121.48, 31.22],
        攀枝花: [101.718637, 26.582347],
        威海: [122.1, 37.5],
        承德: [117.93, 40.97],
        厦门: [118.1, 24.46],
        汕尾: [115.375279, 22.786211],
        潮州: [116.63, 23.68],
        丹东: [124.37, 40.13],
        太仓: [121.1, 31.45],
        曲靖: [103.79, 25.51],
        烟台: [121.39, 37.52],
        福州: [119.3, 26.08],
        瓦房店: [121.979603, 39.627114],
        即墨: [120.45, 36.38],
        抚顺: [123.97, 41.97],
        玉溪: [102.52, 24.35],
        张家口: [114.87, 40.82],
        阳泉: [113.57, 37.85],
        莱州: [119.942327, 37.177017],
        湖州: [120.1, 30.86],
        汕头: [116.69, 23.39],
        昆山: [120.95, 31.39],
        宁波: [121.56, 29.86],
        湛江: [110.359377, 21.270708],
        揭阳: [116.35, 23.55],
        荣成: [122.41, 37.16],
        连云港: [119.16, 34.59],
        葫芦岛: [120.836932, 40.711052],
        常熟: [120.74, 31.64],
        东莞: [113.75, 23.04],
        河源: [114.68, 23.73],
        淮安: [119.15, 33.5],
        泰州: [119.9, 32.49],
        南宁: [108.33, 22.84],
        营口: [122.18, 40.65],
        惠州: [114.4, 23.09],
        江阴: [120.26, 31.91],
        蓬莱: [120.75, 37.8],
        韶关: [113.62, 24.84],
        嘉峪关: [98.289152, 39.77313],
        广州: [113.23, 23.16],
        延安: [109.47, 36.6],
        太原: [112.53, 37.87],
        清远: [113.01, 23.7],
        中山: [113.38, 22.52],
        昆明: [102.73, 25.04],
        寿光: [118.73, 36.86],
        盘锦: [122.070714, 41.119997],
        长治: [113.08, 36.18],
        深圳: [114.07, 22.62],
        珠海: [113.52, 22.3],
        宿迁: [118.3, 33.96],
        咸阳: [108.72, 34.36],
        铜川: [109.11, 35.09],
        平度: [119.97, 36.77],
        佛山: [113.11, 23.05],
        海口: [110.35, 20.02],
        江门: [113.06, 22.61],
        章丘: [117.53, 36.72],
        肇庆: [112.44, 23.05],
        大连: [121.62, 38.92],
        临汾: [111.5, 36.08],
        吴江: [120.63, 31.16],
        石嘴山: [106.39, 39.04],
        沈阳: [123.38, 41.8],
        苏州: [120.62, 31.32],
        茂名: [110.88, 21.68],
        嘉兴: [120.76, 30.77],
        长春: [125.35, 43.88],
        胶州: [120.03336, 36.264622],
        银川: [106.27, 38.47],
        张家港: [120.555821, 31.875428],
        三门峡: [111.19, 34.76],
        锦州: [121.15, 41.13],
        南昌: [115.89, 28.68],
        柳州: [109.4, 24.33],
        三亚: [109.511909, 18.252847],
        自贡: [104.778442, 29.33903],
        吉林: [126.57, 43.87],
        阳江: [111.95, 21.85],
        泸州: [105.39, 28.91],
        西宁: [101.74, 36.56],
        宜宾: [104.56, 29.77],
        呼和浩特: [111.65, 40.82],
        成都: [104.06, 30.67],
        大同: [113.3, 40.12],
        镇江: [119.44, 32.2],
        桂林: [110.28, 25.29],
        张家界: [110.479191, 29.117096],
        宜兴: [119.82, 31.36],
        北海: [109.12, 21.49],
        西安: [108.95, 34.27],
        金坛: [119.56, 31.74],
        东营: [118.49, 37.46],
        牡丹江: [129.58, 44.6],
        遵义: [106.9, 27.7],
        绍兴: [120.58, 30.01],
        扬州: [119.42, 32.39],
        常州: [119.95, 31.79],
        潍坊: [119.1, 36.62],
        重庆: [106.54, 29.59],
        台州: [121.420757, 28.656386],
        南京: [118.78, 32.04],
        滨州: [118.03, 37.36],
        贵阳: [106.71, 26.57],
        无锡: [120.29, 31.59],
        本溪: [123.73, 41.3],
        克拉玛依: [84.77, 45.59],
        渭南: [109.5, 34.52],
        马鞍山: [118.48, 31.56],
        宝鸡: [107.15, 34.38],
        焦作: [113.21, 35.24],
        句容: [119.16, 31.95],
        北京: [116.46, 39.92],
        徐州: [117.2, 34.26],
        衡水: [115.72, 37.72],
        包头: [110, 40.58],
        绵阳: [104.73, 31.48],
        乌鲁木齐: [87.68, 43.77],
        枣庄: [117.57, 34.86],
        杭州: [120.19, 30.26],
        淄博: [118.05, 36.78],
        鞍山: [122.85, 41.12],
        溧阳: [119.48, 31.43],
        库尔勒: [86.06, 41.68],
        安阳: [114.35, 36.1],
        开封: [114.35, 34.79],
        济南: [117, 36.65],
        德阳: [104.37, 31.13],
        温州: [120.65, 28.01],
        九江: [115.97, 29.71],
        邯郸: [114.47, 36.6],
        临安: [119.72, 30.23],
        兰州: [103.73, 36.03],
        沧州: [116.83, 38.33],
        临沂: [118.35, 35.05],
        南充: [106.110698, 30.837793],
        天津: [117.2, 39.13],
        富阳: [119.95, 30.07],
        泰安: [117.13, 36.18],
        诸暨: [120.23, 29.71],
        郑州: [113.65, 34.76],
        哈尔滨: [126.63, 45.75],
        聊城: [115.97, 36.45],
        芜湖: [118.38, 31.33],
        唐山: [118.02, 39.63],
        平顶山: [113.29, 33.75],
        邢台: [114.48, 37.05],
        德州: [116.29, 37.45],
        济宁: [116.59, 35.38],
        荆州: [112.239741, 30.335165],
        宜昌: [111.3, 30.7],
        义乌: [120.06, 29.32],
        丽水: [119.92, 28.45],
        洛阳: [112.44, 34.7],
        秦皇岛: [119.57, 39.95],
        株洲: [113.16, 27.83],
        石家庄: [114.48, 38.03],
        莱芜: [117.67, 36.19],
        常德: [111.69, 29.05],
        保定: [115.48, 38.85],
        湘潭: [112.91, 27.87],
        金华: [119.64, 29.12],
        岳阳: [113.09, 29.37],
        长沙: [113, 28.21],
        衢州: [118.88, 28.97],
        廊坊: [116.7, 39.53],
        菏泽: [115.480656, 35.23375],
        合肥: [117.27, 31.86],
        武汉: [114.31, 30.52],
        大庆: [125.03, 46.58],
        湖北:[113.298572,30.684355],
        广东:[113.280637,23.125178],
        河南:[113.665412,33.757975],
        浙江:[120.153576,29.287459],
        湖南:[111.782279,28.09409],
        安徽:[117.283042,31.26119],
        江西:[115.592151,27.676493],
        江苏:[119.767413,33.041544],
        山东:[118.000923,36.275807],
        四川:[104.065735,30.659462],
        黑龙江:[128.642464,46.756967],
        河北:[114.502461,38.045474],
        福建:[118.306239,26.075302],
        陕西:[111.849248,36.857014],
        广西:[108.320004,22.82402],
        云南:[101.512251,24.740609],
        海南:[109.83119,19.031971],
        贵州:[106.713478,26.578343],
        山西:[111.849248,36.857014],
        天津:[117.190182,39.125596],
        辽宁:[123.429096,41.796767],
        甘肃:[103.823557,36.058039],
        吉林:[125.3245,43.886841],
        新疆:[85.617733,40.792818],
        内蒙古:[111.670801,41.818311],
        宁夏:[106.278179,37.26637],
        香港:[114.173355,22.320048],
        台湾:[121.509062,24.044332],
        青海:[96.778916,35.623178],
        澳门:[113.54909,22.198951],
        西藏:[89.132212,30.860361]
      },
      provList: [
        ["黑龙江", "rgb(152,17,11)"],
        ["吉林省", "rgb(189,22,11)"],
        ["辽宁", "rgb(189,22,11)"],
        ["内蒙古", "#ff0000"],
        ["河北", "rgb(152,17,11)"],
        ["北京", "rgb(152,17,11)"],
        ["天津", "rgb(190,22,11)"],
        ["山东省", "rgb(152,17,11)"],
        ["江苏", "rgb(152,17,11)"],
        ["上海", "rgb(152,17,11)"],
        ["浙江", "rgba(143,0,2,.7)"],
        ["福建", "rgb(152,17,11)"],
        ["台湾", "rgb(189,22,11)"],
        ["广东", "rgba(143,0,2,.7)"],
        ["香港", "#F09ABD"],
        ["澳门", "#F09ABD"],
        ["海南", "rgb(189,22,11)"],
        ["广西", "rgb(152,17,11)"],
        ["云南", "rgb(152,17,11)"],
        ["西藏", "#ff2400"],
        ["新疆", "#ff0000"],
        ["甘肃", "#ff0000"],
        ["青海", "#ff0000"],
        ["四川", "rgba(152,17,11,.7)"],
        ["贵州", "rgb(190,22,11)"],
        ["重庆", "rgb(152,17,11)"],
        ["湖南", "rgb(152,17,11)"],
        ["江西", "rgb(152,17,11)"],
        ["湖北", "rgb(103,16,11)"],
        ["安徽", "rgb(152,17,11)"],
        ["河南", "rgb(152,17,11)"],
        ["陕西", "rgb(152,17,11)"],
        ["山西", "rgb(190,22,11)"],
        ["宁夏", "#ff0000"]
      ],
      currentIndex: undefined,
      polar: {
        baseOption: {
          timeline: {
            axisType: "category",
            autoPlay: false,
            playInterval: 1000,
            currentIndex:0,
            loop: true,
            data: [
              {
                value: '01-24',
                symbol: "rect",
                itemStyle: {
                  color: "#00ffff"
                },
                symbolSize: [1, 8],
                symbolOffset: [0, "-100%"]
              },
              {
                value: '01-25',
                symbol: "rect",
                itemStyle: {
                  color: "#00ffff"
                },
                symbolSize: [1, 8],
                symbolOffset: [0, "-100%"]
              },
              {
                value: '01-26',
                symbol: "rect",
                itemStyle: {
                  color: "#00ffff"
                },
                symbolSize: [1, 8],
                symbolOffset: [0, "-100%"]
              },
              {
                value: '01-27',
                symbol: "rect",
                itemStyle: {
                  color: "#00ffff"
                },
                symbolSize: [1, 8],
                symbolOffset: [0, "-100%"]
              },
              {
                value: '01-28',
                symbol: "rect",
                itemStyle: {
                  color: "#00ffff"
                },
                symbolSize: [1, 8],
                symbolOffset: [0, "-100%"]
              }
            ],
            tooltip: {
              trigger: "item",
              formatter: "{b}确诊{c}例"
            },
            lineStyle: {
              color: "#00ffff"
            },
            controlStyle: {
              showPlayBtn: false,
              borderColor:"#00ffff"
           /*   prevIcon:"image://" + img1.b,
              nextIcon:"image://" + img1.c,*/
            },
            animationDurationUpdate: 1000,
            animationEasingUpdate: "quinticInOut"
          },
          bmap: {
           /* center: [115.97, 29.71],*/
            zoom: 5,
            roam: true,
            mapStyle: {
              styleJson: [
                {
                  featureType: "water",
                  elementType: "all",
                  stylers: {
                    color: "#011018"
                  }
                },
                {
                  featureType: "land",
                  elementType: "all",
                  stylers: {
                    color: "#001E29"
                  }
                },
                {
                  featureType: "boundary",
                  elementType: "geometry",
                  stylers: {
                    color: "green"
                  }
                },
                {
                  featureType: "railway",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "highway",
                  elementType: "geometry",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "highway",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#005b96",
                    lightness: 1
                  }
                },
                {
                  featureType: "highway",
                  elementType: "labels",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "arterial",
                  elementType: "geometry",
                  stylers: {
                    color: "#004981"
                  }
                },
                {
                  featureType: "arterial",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#00508b"
                  }
                },
                {
                  featureType: "poi",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "green",
                  elementType: "all",
                  stylers: {
                    color: "#056197",
                    visibility: "off"
                  }
                },
                {
                  featureType: "subway",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "manmade",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "local",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "arterial",
                  elementType: "labels",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "boundary",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#029fd4"
                  }
                },
                {
                  featureType: "building",
                  elementType: "all",
                  stylers: {
                    color: "#1a5787"
                  }
                },
                {
                  featureType: "label",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                }
              ]
            }
          }
        },
        options: [
          {
            visualMap: {
              min: 0,
              max: 50,
              right: "25%",
              text: ["高", "低"], // 文本，默认为数值文本
              calculable: true,
              show: false
            },
            series: [
              {
                name: "pm2.5",
                type: "scatter",
                coordinateSystem: "bmap",
                data: [],
                symbol: "image://" + img1.a,
                symbolSize: "20",
                label: {
                  formatter: "{b}确诊{c}例",
                  position: "right"
                },
                itemStyle: {
                  color: "red"
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("chartStock"));
    this.myChart.on('finished',()=>{
      let bmap = this.myChart.getModel().getComponent('bmap').getBMap();
      bmap.addEventListener('zoomend',  ()=> {
        if(bmap.getZoom() === 4) {
          this.$parent.changeRange();
        }
      })
    })
  },
  methods: {
    addBox(params){
      this.axios.get('https://demodev.24e.co/wuhan/get7DayData',{params:{
        region:params.name
      }}).then(res=>{
        this.lineOptions1.xAxis.data = res.data.Tendency.xData;
        this.lineOptions1.series[0].data = res.data.Tendency.seriesData[0].value;
        this.lineOptions1.series[1].data = res.data.Tendency.seriesData[2].value;
        this.lineOptions1.series[2].data = res.data.Tendency.seriesData[3].value;
        console.log(res);
      })
        this.boxShow = true;
      const x = params.event.offsetX - 10 + 'px';
        const y = params.event.offsetY - 165 + 'px';
        document.querySelector('#box').style.top = y;
        document.querySelector('#box').style.left = x;
      for(let i of this.inlandData) {
        if(i.name === params.name) {
          this.boxName = i.name;
          this.value = i.value;
          this.cureNum = i.cureNum;
          this.deadNum = i.deadNum;
        }
      }
    },
    changeTime(params){
      this.changeNum(params.currentIndex);
    },
    changeMode(mode) {
      if(mode === 'grade') {
           this.provList.forEach(item => {
            this.getBoundary(item);
    })
           for(let i of this.polar.options) {
             i.series[0].symbolSize = '0'
           }
      }else {
        // this.myChart.init();
        for(let i of this.polar.options) {
          i.series[0].symbolSize = '20'
        }
        this.myChart.setOption(this.polar,true)
      }
    },
    changeNum(index) {
      this.$emit('changeNum',index);
    },
    getBoundary(provItem) {
      let map = this.myChart
        .getModel()
        .getComponent("bmap")
        .getBMap();
      let bdary = new BMap.Boundary();
      bdary.get(provItem[0], function(rs) {
        //获取行政区域
        let count = rs.boundaries.length; //行政区域的点有多少个
        let pointArray = [];
        for (let i = 0; i < count; i++) {
          let ply = new BMap.Polygon(rs.boundaries[i], {
            strokeWeight: 1,
            strokeColor: "#aaaaaa",
            fillColor: provItem[1]
          }); //建立多边形覆盖物
          map.addOverlay(ply); //添加覆盖物
          pointArray = pointArray.concat(ply.getPath());
        }
      });
    },
    getTrend(){
      this.axios.get("https://demodev.24e.co/wuhan/getTrend").then(res=>{
        const arr = [...res.data.inland,...res.data.foreign];
        this.inlandData = arr;
      })
    },
    get7DayData(){
      this.axios.get("https://demodev.24e.co/wuhan/get7DayData").then(res=>{
        this.polar.baseOption.timeline.currentIndex = res.data.Tendency.xData.length - 1;
       const dateArr = [];
        for(let i of res.data.Tendency.xData) {
          let obj ={
            value: '',
            symbol: "rect",
            itemStyle: {
              color: "#00ffff"
            },
            symbolSize: [1, 8],
            symbolOffset: [0, "-100%"]
          };
          obj.value = i;
          dateArr.push(obj)
        }
        for(let i in res.data.Tendency.xData) {
          const convertData = this.convertData(this.inlandData)
          let obj = {
            series: [
              {
                name: "pm2.5",
                type: "scatter",
                coordinateSystem: "bmap",
                data: convertData,
                symbol: "image://" + img1.a,
                symbolSize: "20",
                label: {
                  formatter: "{b}",
                  position: "right"
                },
                itemStyle: {
                  color: "red"
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              }
            ]
          }
          if(i !== '0') {
            this.polar.options.push(obj)
          }
        }
        this.polar.baseOption.timeline.data = dateArr;
      })
    },
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    }
  },
  created() {
    this.getTrend();
    this.get7DayData();
  }
};
</script>

<style lang="scss" scoped>
.mapWrapper {
  position: relative;
  #box {
    position: absolute;
    z-index: 6;
    .boxTop {
      display: flex;
      border:1px solid rgba(255,0,0,.5);
      font-size: 0.6vw;
      .name {
        color:#fff;
        background: rgba(255,0,0,0.3);
        padding:0.1vw 0.8vw;
      }
      .boxNumber {
      display: flex;
        align-items: center;

        width: 80%;
        .boxList {
          width: 33.333%;
          text-align: center;
          .numberName {
            color:rgb(163,198,203);
          }
          .confirm {
            color: rgb(251,44,75);
          }
          .cure {
            color:rgb(0,255,6)
          }
          .death {
            color:rgb(199,199,199);
          }
        }
    }
    }
    .boxBottom {


      padding:0.9vw 0.5vw;
      box-shadow: inset 2px -3px 18px 0px rgba(255,0,0,0.5);
      .lineChart {
        width: 14.1vw;
        height: 7.3vw;
      }
    }
  }
  #chartStock {
    width: 100vw;
    height: 100vh;
  }
  .changeStyle {
    position: absolute;
    bottom: 8vw;
    right: 20vw;
    color: #fff;
    font-size: 0.6vw;
    .grade {
      margin-bottom: 1vw;
      display: flex;
      cursor: pointer;
    }
    .scatter {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .gradeImg {
      width: 0.8vw;
      height: 0.8vw;
      background-image: url("~@/assets/imgs/grade.jpg") ;
      background-size: 100% 100%;
      margin-right: 0.7vw;
    }
    .scatterImg {
      width: 0.8vw;
      height: 0.8vw;
      margin-right: 0.7vw;
      border-radius: 50%;
      background: rgba(199,199,199,0.5);
    }
  }
}
</style>
<style>
  .BMap_cpyCtrl {
    display:none;
  }

  .anchorBL{
    display:none;
  }
</style>
