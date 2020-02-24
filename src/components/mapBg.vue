<template>
    <div class="mapWrapper">
        <vECharts :options="polar" id="chartStock" @timelinechanged="changeTime" @click="addBox" @mouseover="handelBoxShow" @mouseout="closeBox"  />
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
    import {mapData,geoCoordMap,provList} from "../utils/utils";

    export default {
        name: "mapBg",
        components: {
            vECharts,stackBar
        },
        data() {
            return {
                isAddBox:true,
                mapData,
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
                geoCoordMap,
                provList,
                boxType:1,
                povinceName:'',
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
                                    type: "effectScatter",
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
                                },
                                // {
                                //     name: "pm2.5",
                                //     type: "effectScatter",
                                //     rippleEffect: {
                                //         brushType: 'stroke'
                                //     },
                                //     coordinateSystem: "bmap",
                                //     data: [],
                                //     label: {
                                //         formatter: "{b}确诊{c}例",
                                //         position: "right"
                                //     },
                                //     itemStyle: {
                                //         color: "red"
                                //     },
                                //     emphasis: {
                                //         label: {
                                //             show: true
                                //         }
                                //     }
                                // },
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
                        this.$parent.changeRange(bmap.getZoom() === 4 ? 4 : 5);
                })
            })
        },
        methods: {
            handelBoxShow(params){
                this.boxShow = true;
                const x = params.event.offsetX + 20 + 'px';
                const y = params.event.offsetY - 205 + 'px';
                document.querySelector('#box').style.top = y;
                document.querySelector('#box').style.left = x;
                let paramsData = {};
                if(this.type === 1) {
                    paramsData = {region:params.name}
                }else {
                    paramsData = {region:this.povinceName ,city:params.name}
                }
                this.axios.get('https://demodev.24e.co/wuhan/get7DayData',{params:paramsData}).then(res=>{
                   this.lineOptions1.xAxis.data = res.data.Tendency.xData;
                   this.lineOptions1.series[0].data = res.data.Tendency.seriesData[0].value;
                   this.lineOptions1.series[1].data = res.data.Tendency.seriesData[2].value;
                   this.lineOptions1.series[2].data = res.data.Tendency.seriesData[3].value;
                   if(this.boxType === 2) {
                       this.value = res.data.Tendency.seriesData[0].value[res.data.Tendency.seriesData[0].value.length -1];
                       this.cureNum = res.data.Tendency.seriesData[2].value[res.data.Tendency.seriesData[2].value.length -1];
                       this.deadNum = res.data.Tendency.seriesData[3].value[res.data.Tendency.seriesData[3].value.length -1];
                   }
               })

                if(this.boxType === 1) {
                    for(let i of this.inlandData) {
                        if(i.name === params.name) {

                            this.value = i.value;
                            this.cureNum = i.cureNum;
                            this.deadNum = i.deadNum;
                        }
                    }
                }
                this.boxName = params.name;
            },
            closeBox(){
                    this.boxShow = false;
            },
            addBox(params) {
                if(this.isAddBox) {
                    this.povinceName = params.name;
                    this.boxType+=1;
                    this.isAddBox = false;
                    this.boxShow = false;
                    this.axios.get('https://demodev.24e.co/wuhan/getMapData',{
                        params:{
                            area:params.name
                        }
                    }).then(res=>{
                        const convertData = this.convertData(res.data.data,'second');
                        for(let i of this.polar.options) {
                            i.series[0].data.push(...convertData)
                        }
                    });
                    for(let i of this.mapData.provinces) {
                        if(i.provinceName.indexOf(params.name) >= 0) {
                            for(let j of i.citys) {
                                this.getProvinceBoundary(j.citysName,params.name)
                            }
                        }
                    }
                }
            },
            getProvinceBoundary(name,provinceName){
                const map = this.myChart
                    .getModel()
                    .getComponent("bmap")
                    .getBMap();
                const bdary = new BMap.Boundary();
        bdary.get(name, function(rs){       //获取行政区域
            const count = rs.boundaries.length; //行政区域的点有多少个
            if (count === 0) {
                return ;
            }
            for (let i = 0; i < count; i++) {
                let ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#029fd4",fillColor:'rgb(0,31,42)'}); //建立多边形覆盖物
                map.addOverlay(ply);  //添加覆盖物
            }
        });
                bdary.get(provinceName, function(rs){       //获取行政区域
                    const count = rs.boundaries.length; //行政区域的点有多少个
                    if (count === 0) {
                        return ;
                    }
                    let pointArray = [];
                    for (let i = 0; i < count; i++) {
                        var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#029fd4",fillColor:'rgb(0,31,42)'}); //建立多边形覆盖物
                        pointArray = pointArray.concat(ply.getPath());
                    }
                     map.setViewport(pointArray);    //调整视野
                });
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
                    this.isAddBox = true;
                    this.boxType = 1;
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
                        const convertData = this.convertData(this.inlandData);
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
                                    },
                                    zlevel: 1
                                },
                               /* {
                                    name: "pm2.5",
                                    type: "scatter",
                                    coordinateSystem: "bmap",
                                    data: convertData,
                                    label: {
                                        formatter: "{b}",
                                        position: "right"
                                    },
                                    symbolSize: 30,
                                    itemStyle: {
                                        color: 'blue',
                                    },
                                    hoverAnimation: true,
                                    emphasis: {
                                        label: {
                                            show: true
                                        }
                                    }
                                }*/
                            ]
                        }
                        if(i !== '0') {
                            this.polar.options.push(obj)
                        }
                    }
                    console.log(this.polar.options);
                    this.polar.baseOption.timeline.data = dateArr;
                })
            },
            convertData(data,type) {
                let res = [];
                for (let i = 0; i < data.length; i++) {
                    let geoCoord = type === 'second' ? this.geoCoordMap[data[i].secondName] : this.geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: type === 'second' ? data[i].secondName : data[i].name,
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
            bottom: 5vw;
            right: 22vw;
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
