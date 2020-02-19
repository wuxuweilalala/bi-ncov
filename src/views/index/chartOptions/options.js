const dataCost = ["7,123", "8,234", "9,323"]




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

export const polar = {
    backgroundColor: 'rgb(1,16,24)"',
    tooltip: {
        trigger: "item"
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: {
                        color: "#044161"
                    }
                },
                {
                    featureType: "land",
                    elementType: "all",
                    stylers: {
                        color: "#004981"
                    }
                },
                {
                    featureType: "boundary",
                    elementType: "geometry",
                    stylers: {
                        color: "#064f85"
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
                        color: "#004981"
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
}
