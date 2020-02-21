const dataCost = ['430',"504", "521", "720"]




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
        data: ['武汉市第五医院','武汉市武昌医院', '武汉市中心医院', '武汉市金银潭医院 ']
    },
    height: "60%",
    series: [{
        type: 'bar',
        barGap: '-90%',
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
        barWidth: '10%',
        itemStyle: {
            normal: {
                borderWidth: 2,
                color: 'rgba(255, 255, 255,.15)'
            },
        },
        data: [1, 1, 1,1],
    }, {
        type: 'bar',
        barGap: '-88%',
        barWidth: '10%',
        itemStyle: {
            normal: {
                color: function (param) {
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
        data: [1, 1, 1,1],
    }]
}

