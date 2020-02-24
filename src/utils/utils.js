export function timeFormatter(params) {
    let time = new Date()
    let y = time.getFullYear();
    let month = time.getMonth() + 1;
    let d = time.getDate();
    if (params && params.prefix) {
        month = time.getMonth() + 1 > 10 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1);
        d = time.getDate() > 10 ? time.getDate() : '0' + time.getDate();
    }
    let h = time.getHours();
    h = h < 10 ? ('0' + h) : h;
    let m = time.getMinutes();
    let s = time.getSeconds();
    m = m < 10 ? ('0' + m) : m;
    s = s < 10 ? ('0' + s) : s;
    // let w = this.getWeek(time.getDay());
    let obj = {};
    obj.date = y + '/' + month + '/' + d;
    obj.nowTime = h + ':' + m + ':' + s;
    // obj.w = w;
    if (params && params.format) {
        switch (params.format) {
            case "local":
                obj.date = y + '年' + month + '月' + d + '日';
                break;
            case "dash":
                obj.date = y + '-' + month + '-' + d;
                break;
        }
    }
    return obj
}

export const mapData ={
    "provinces": [
        {
            "citys": [
                {
                    "citysName": "石家庄市"
                },
                {
                    "citysName": "邯郸市"
                },
                {
                    "citysName": "唐山市"
                },
                {
                    "citysName": "保定市"
                },
                {
                    "citysName": "秦皇岛市"
                },
                {
                    "citysName": "邢台市"
                },
                {
                    "citysName": "张家口市"
                },
                {
                    "citysName": "承德市"
                },
                {
                    "citysName": "沧州市"
                },
                {
                    "citysName": "廊坊市"
                },
                {
                    "citysName": "衡水市"
                }
            ],
            "provinceName": "河北省"
        },
        {
            "citys": [
                {
                    "citysName": "太原市"
                },
                {
                    "citysName": "大同市"
                },
                {
                    "citysName": "朔州市"
                },
                {
                    "citysName": "阳泉市"
                },
                {
                    "citysName": "长治市"
                },
                {
                    "citysName": "晋城市"
                },
                {
                    "citysName": "忻州市"
                },
                {
                    "citysName": "吕梁市"
                },
                {
                    "citysName": "晋中市"
                },
                {
                    "citysName": "临汾市"
                },
                {
                    "citysName": "运城市"
                },
            ],
            "provinceName": "山西省"
        },
        {
            "citys": [
                {
                    "citysName": "呼和浩特市"
                },
                {
                    "citysName": "包头市"
                },
                {
                    "citysName": "乌海市"
                },
                {
                    "citysName": "赤峰市"
                },
                {
                    "citysName": "呼伦贝尔市"
                },
                {
                    "citysName": "通辽市"
                },
                {
                    "citysName": "乌兰察布市"
                },
                {
                    "citysName": "鄂尔多斯市"
                },
                {
                    "citysName": "巴彦淖尔市"
                },
            ],
            "provinceName": "内蒙古自治区"
        },
        {
            "citys": [
                {
                    "citysName": "沈阳市"
                },
                {
                    "citysName": "大连市"
                },
                {
                    "citysName": "朝阳市"
                },
                {
                    "citysName": "阜新市"
                },
                {
                    "citysName": "铁岭市"
                },
                {
                    "citysName": "抚顺市"
                },
                {
                    "citysName": "本溪市"
                },
                {
                    "citysName": "辽阳市"
                },
                {
                    "citysName": "鞍山市"
                },
                {
                    "citysName": "丹东市"
                },
                {
                    "citysName": "营口市"
                },
                {
                    "citysName": "盘锦市"
                },
                {
                    "citysName": "锦州市"
                },
                {
                    "citysName": "葫芦岛市"
                }
            ],
            "provinceName": "辽宁省"
        },
        {
            "citys": [
                {
                    "citysName": "长春市"
                },
                {
                    "citysName": "吉林市"
                },
                {
                    "citysName": "白城市"
                },
                {
                    "citysName": "松原市"
                },
                {
                    "citysName": "四平市"
                },
                {
                    "citysName": "辽源市"
                },
                {
                    "citysName": "通化市"
                },
                {
                    "citysName": "白山市"
                },
            ],
            "provinceName": "吉林省"
        },
        {
            "citys": [
                {
                    "citysName": "哈尔滨市"
                },
                {
                    "citysName": "齐齐哈尔市"
                },
                {
                    "citysName": "黑河市"
                },
                {
                    "citysName": "大庆市"
                },
                {
                    "citysName": "伊春市"
                },
                {
                    "citysName": "鹤岗市"
                },
                {
                    "citysName": "佳木斯市"
                },
                {
                    "citysName": "双鸭山市"
                },
                {
                    "citysName": "七台河市"
                },
                {
                    "citysName": "鸡西市"
                },
                {
                    "citysName": "牡丹江市"
                },
                {
                    "citysName": "绥化市"
                }
            ],
            "provinceName": "黑龙江省"
        },
        {
            "citys": [
                {
                    "citysName": "南京市"
                },
                {
                    "citysName": "徐州市"
                },
                {
                    "citysName": "连云港市"
                },
                {
                    "citysName": "宿迁市"
                },
                {
                    "citysName": "淮安市"
                },
                {
                    "citysName": "盐城市"
                },
                {
                    "citysName": "扬州市"
                },
                {
                    "citysName": "泰州市"
                },
                {
                    "citysName": "南通市"
                },
                {
                    "citysName": "镇江市"
                },
                {
                    "citysName": "常州市"
                },
                {
                    "citysName": "无锡市"
                },
                {
                    "citysName": "苏州市"
                }
            ],
            "provinceName": "江苏省"
        },
        {
            "citys": [
                {
                    "citysName": "杭州市"
                },
                {
                    "citysName": "宁波市"
                },
                {
                    "citysName": "湖州市"
                },
                {
                    "citysName": "嘉兴市"
                },
                {
                    "citysName": "舟山市"
                },
                {
                    "citysName": "绍兴市"
                },
                {
                    "citysName": "衢州市"
                },
                {
                    "citysName": "金华市"
                },
                {
                    "citysName": "台州市"
                },
                {
                    "citysName": "温州市"
                },
                {
                    "citysName": "丽水市"
                },
            ],
            "provinceName": "浙江省"
        },
        {
            "citys": [
                {
                    "citysName": "合肥市"
                },
                {
                    "citysName": "芜湖市"
                },
                {
                    "citysName": "蚌埠市"
                },
                {
                    "citysName": "淮南市"
                },
                {
                    "citysName": "马鞍山市"
                },
                {
                    "citysName": "淮北市"
                },
                {
                    "citysName": "铜陵市"
                },
                {
                    "citysName": "安庆市"
                },
                {
                    "citysName": "黄山市"
                },
                {
                    "citysName": "滁州市"
                },
                {
                    "citysName": "阜阳市"
                },
                {
                    "citysName": "宿州市"
                },
                {
                    "citysName": "六安市"
                },
                {
                    "citysName": "亳州市"
                },
                {
                    "citysName": "池州市"
                },
                {
                    "citysName": "宣城市"
                },
                {
                    "citysName": "巢湖市"
                }
            ],
            "provinceName": "安徽省"
        },
        {
            "citys": [
                {
                    "citysName": "厦门市"
                },
                {
                    "citysName": "福州市"
                },
                {
                    "citysName": "南平市"
                },
                {
                    "citysName": "三明市"
                },
                {
                    "citysName": "莆田市"
                },
                {
                    "citysName": "泉州市"
                },
                {
                    "citysName": "漳州市"
                },
                {
                    "citysName": "龙岩市"
                },
                {
                    "citysName": "宁德市"
                }
            ],
            "provinceName": "福建省"
        },
        {
            "citys": [
                {
                    "citysName": "南昌市"
                },
                {
                    "citysName": "九江市"
                },
                {
                    "citysName": "景德镇市"
                },
                {
                    "citysName": "鹰潭市"
                },
                {
                    "citysName": "新余市"
                },
                {
                    "citysName": "萍乡市"
                },
                {
                    "citysName": "赣州市"
                },
                {
                    "citysName": "上饶市"
                },
                {
                    "citysName": "抚州市"
                },
                {
                    "citysName": "宜春市"
                },
                {
                    "citysName": "吉安市"
                }
            ],
            "provinceName": "江西省"
        },
        {
            "citys": [
                {
                    "citysName": "济南市"
                },
                {
                    "citysName": "青岛市"
                },
                {
                    "citysName": "聊城市"
                },
                {
                    "citysName": "德州市"
                },
                {
                    "citysName": "东营市"
                },
                {
                    "citysName": "淄博市"
                },
                {
                    "citysName": "潍坊市"
                },
                {
                    "citysName": "烟台市"
                },
                {
                    "citysName": "威海市"
                },
                {
                    "citysName": "日照市"
                },
                {
                    "citysName": "临沂市"
                },
                {
                    "citysName": "枣庄市"
                },
                {
                    "citysName": "济宁市"
                },
                {
                    "citysName": "泰安市"
                },
                {
                    "citysName": "莱芜市"
                },
                {
                    "citysName": "滨州市"
                },
                {
                    "citysName": "菏泽市"
                }
            ],
            "provinceName": "山东省"
        },
        {
            "citys": [
                {
                    "citysName": "郑州市"
                },
                {
                    "citysName": "开封市"
                },
                {
                    "citysName": "洛阳市"
                },
                {
                    "citysName": "平顶山市"
                },
                {
                    "citysName": "安阳市"
                },
                {
                    "citysName": "鹤壁市"
                },
                {
                    "citysName": "新乡市"
                },
                {
                    "citysName": "焦作市"
                },
                {
                    "citysName": "濮阳市"
                },
                {
                    "citysName": "许昌市"
                },
                {
                    "citysName": "漯河市"
                },
                {
                    "citysName": "三门峡市"
                },
                {
                    "citysName": "南阳市"
                },
                {
                    "citysName": "商丘市"
                },
                {
                    "citysName": "周口市"
                },
                {
                    "citysName": "驻马店市"
                },
                {
                    "citysName": "信阳市"
                }
            ],
            "provinceName": "河南省"
        },
        {
            "citys": [
                {
                    "citysName": "武汉市"
                },
                {
                    "citysName": "十堰市"
                },
                {
                    "citysName": "襄阳市"
                },
                {
                    "citysName": "荆门市"
                },
                {
                    "citysName": "孝感市"
                },
                {
                    "citysName": "黄冈市"
                },
                {
                    "citysName": "鄂州市"
                },
                {
                    "citysName": "黄石市"
                },
                {
                    "citysName": "咸宁市"
                },
                {
                    "citysName": "荆州市"
                },
                {
                    "citysName": "宜昌市"
                },
                {
                    "citysName": "随州市"
                }
            ],
            "provinceName": "湖北省"
        },
        {
            "citys": [
                {
                    "citysName": "长沙市"
                },
                {
                    "citysName": "衡阳市"
                },
                {
                    "citysName": "张家界市"
                },
                {
                    "citysName": "常德市"
                },
                {
                    "citysName": "益阳市"
                },
                {
                    "citysName": "岳阳市"
                },
                {
                    "citysName": "株洲市"
                },
                {
                    "citysName": "湘潭市"
                },
                {
                    "citysName": "郴州市"
                },
                {
                    "citysName": "永州市"
                },
                {
                    "citysName": "邵阳市"
                },
                {
                    "citysName": "怀化市"
                },
                {
                    "citysName": "娄底市"
                }
            ],
            "provinceName": "湖南省"
        },
        {
            "citys": [
                {
                    "citysName": "广州市"
                },
                {
                    "citysName": "深圳市"
                },
                {
                    "citysName": "清远市"
                },
                {
                    "citysName": "韶关市"
                },
                {
                    "citysName": "河源市"
                },
                {
                    "citysName": "梅州市"
                },
                {
                    "citysName": "潮州市"
                },
                {
                    "citysName": "汕头市"
                },
                {
                    "citysName": "揭阳市"
                },
                {
                    "citysName": "汕尾市"
                },
                {
                    "citysName": "惠州市"
                },
                {
                    "citysName": "东莞市"
                },
                {
                    "citysName": "珠海市"
                },
                {
                    "citysName": "中山市"
                },
                {
                    "citysName": "江门市"
                },
                {
                    "citysName": "佛山市"
                },
                {
                    "citysName": "肇庆市"
                },
                {
                    "citysName": "云浮市"
                },
                {
                    "citysName": "阳江市"
                }
            ],
            "provinceName": "广东省"
        },
        {
            "citys": [
                {
                    "citysName": "南宁市"
                },
                {
                    "citysName": "桂林市"
                },
                {
                    "citysName": "柳州市"
                },
                {
                    "citysName": "梧州市"
                },
                {
                    "citysName": "贵港市"
                },
                {
                    "citysName": "玉林市"
                },
                {
                    "citysName": "钦州市"
                },
                {
                    "citysName": "北海市"
                },
                {
                    "citysName": "防城港市"
                },
                {
                    "citysName": "崇左市"
                },
                {
                    "citysName": "百色市"
                },
                {
                    "citysName": "河池市"
                },
                {
                    "citysName": "来宾市"
                },
                {
                    "citysName": "贺州市"
                }
            ],
            "provinceName": "广西壮族自治区"
        },
        {
            "citys": [
                {
                    "citysName": "海口市"
                },
                {
                    "citysName": "三亚市"
                },
                {
                    "citysName": "三沙市"
                },
                {
                    "citysName": "儋州市"
                }
            ],
            "provinceName": "海南省"
        },
        {
            "citys": [
                {
                    "citysName": "成都市"
                },
                {
                    "citysName": "广元市"
                },
                {
                    "citysName": "绵阳市"
                },
                {
                    "citysName": "德阳市"
                },
                {
                    "citysName": "南充市"
                },
                {
                    "citysName": "广安市"
                },
                {
                    "citysName": "遂宁市"
                },
                {
                    "citysName": "内江市"
                },
                {
                    "citysName": "乐山市"
                },
                {
                    "citysName": "自贡市"
                },
                {
                    "citysName": "泸州市"
                },
                {
                    "citysName": "宜宾市"
                },
                {
                    "citysName": "攀枝花市"
                },
                {
                    "citysName": "巴中市"
                },
                {
                    "citysName": "达州市"
                },
                {
                    "citysName": "资阳市"
                },
                {
                    "citysName": "眉山市"
                },
                {
                    "citysName": "雅安市"
                }
            ],
            "provinceName": "四川省"
        },
        {
            "citys": [
                {
                    "citysName": "贵阳市"
                },
                {
                    "citysName": "六盘水市"
                },
                {
                    "citysName": "遵义市"
                },
                {
                    "citysName": "安顺市"
                }
            ],
            "provinceName": "贵州省"
        },
        {
            "citys": [
                {
                    "citysName": "昆明市"
                },
                {
                    "citysName": "曲靖市"
                },
                {
                    "citysName": "玉溪市"
                },
                {
                    "citysName": "丽江市"
                },
                {
                    "citysName": "昭通市"
                },
                {
                    "citysName": "普洱市"
                },
                {
                    "citysName": "临沧市"
                },
                {
                    "citysName": "保山市"
                }
            ],
            "provinceName": "云南省"
        },
        {
            "citys": [
                {
                    "citysName": "西安市"
                },
                {
                    "citysName": "延安市"
                },
                {
                    "citysName": "铜川市"
                },
                {
                    "citysName": "渭南市"
                },
                {
                    "citysName": "咸阳市"
                },
                {
                    "citysName": "宝鸡市"
                },
                {
                    "citysName": "汉中市"
                },
                {
                    "citysName": "榆林市"
                },
                {
                    "citysName": "商洛市"
                },
                {
                    "citysName": "安康市"
                }
            ],
            "provinceName": "陕西省"
        },
        {
            "citys": [
                {
                    "citysName": "兰州市"
                },
                {
                    "citysName": "嘉峪关市"
                },
                {
                    "citysName": "金昌市"
                },
                {
                    "citysName": "白银市"
                },
                {
                    "citysName": "天水市"
                },
                {
                    "citysName": "酒泉市"
                },
                {
                    "citysName": "张掖市"
                },
                {
                    "citysName": "武威市"
                },
                {
                    "citysName": "庆阳市"
                },
                {
                    "citysName": "平凉市"
                },
                {
                    "citysName": "定西市"
                },
                {
                    "citysName": "陇南市"
                }
            ],
            "provinceName": "甘肃省"
        },
        {
            "citys": [
                {
                    "citysName": "西宁市"
                },
                {
                    "citysName": "海东市"
                }
            ],
            "provinceName": "青海省"
        },
        {
            "citys": [
                {
                    "citysName": "拉萨市"
                },
                {
                    "citysName": "日喀则市"
                },
                {
                    "citysName": "昌都市"
                },
                {
                    "citysName": "林芝市"
                },
                {
                    "citysName": "山南市"
                }
            ],
            "provinceName": "西藏自治区"
        },
        {
            "citys": [
                {
                    "citysName": "银川市"
                },
                {
                    "citysName": "石嘴山市"
                },
                {
                    "citysName": "吴忠市"
                },
                {
                    "citysName": "中卫市"
                },
                {
                    "citysName": "固原市"
                }
            ],
            "provinceName": "宁夏回族自治区"
        },
        {
            "citys": [
                {
                    "citysName": "台北市"
                },
                {
                    "citysName": "新北市"
                },
                {
                    "citysName": "桃园市"
                },
                {
                    "citysName": "台中市"
                },
                {
                    "citysName": "台南市"
                },
                {
                    "citysName": "高雄市"
                },
                {
                    "citysName": "基隆市"
                },
                {
                    "citysName": "新竹市"
                },
                {
                    "citysName": "嘉义市"
                }
            ],
            "provinceName": "台湾"
        },
        {
            "citys": [
                {
                    "citysName": "北京市"
                }
            ],
            "provinceName": "北京市"
        },
        {
            "citys": [
                {
                    "citysName": "天津市"
                }
            ],
            "provinceName": "天津市"
        },
        {
            "citys": [
                {
                    "citysName": "上海市"
                }
            ],
            "provinceName": "上海市"
        },
        {
            "citys": [
                {
                    "citysName": "重庆市"
                }
            ],
            "provinceName": "重庆市"
        },
        {
            "citys": [
                {
                    "citysName": "香港特别行政区"
                }
            ],
            "provinceName": "香港"
        },
        {
            "citys": [
                {
                    "citysName": "澳门特别行政区"
                }
            ],
            "provinceName": "澳门"
        },
        {
            "citys": [
                {
                    "citysName": "乌鲁木齐市"
                },
                {
                    "citysName": "克拉玛依市"
                },
                {
                    "citysName": "吐鲁番市"
                },
                {
                    "citysName": "哈密市"
                },
            ],
            "provinceName": "新疆维吾尔自治区"
        }
    ]
}




