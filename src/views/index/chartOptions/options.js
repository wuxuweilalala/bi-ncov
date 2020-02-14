const dataCost = ["7,123", "8,234", "9,323"]

export const lineOptions1 = {
    tooltip: {
        trigger: "axis"
    },
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
}

export const lineOptions2 = {
    tooltip: {
        trigger: "axis"
    },
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
}

export const barOption = {
    backgroundColor: 'transparent',
    grid: {
        left: '40%',
        right: '20%',
        top: "10%"
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            margin: 20,
            color: '#fff',
            fontSize: 14
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: ['医院三', '医院二', '医院一 ']
    },
    height: "60%",
    series: [{
        type: 'bar',
        barGap: '-100%',
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 14,
                formatter:
                    function (param) {
                        return dataCost[param.dataIndex];
                    },
            }
        },
        barWidth: '35%',
        itemStyle: {
            normal: {
                borderWidth: 2,
                color: 'rgba(255, 255, 255,.15)'
            },
        },
        data: [1, 1, 1],
    }, {
        type: 'bar',
        barGap: '-98%',
        barWidth: '33%',
        itemStyle: {
            normal: {
                color: function (param) {
                    console.log(param)
                    if (param.value === 1) {
                        return {
                            type: 'linear',
                            x: 0,
                            x1: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgb(251,44,75)'
                            }, {
                                offset: 1,
                                color: 'rgb(255,0,0)'
                            }]
                        }
                    } else {
                        return {
                            type: 'linear',
                            x: 0,
                            x1: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgb(0,159,157)'
                            }, {
                                offset: 1,
                                color: 'rgb(0,255,255)'
                            }]
                        }
                    }

                }
            },
        },
        data: [0.2, 0.201, 1],
    }]
}