import { useState, useEffect, useRef, useContext } from 'react';

import * as echarts from 'echarts';
import dataJson from './data.json';

import Context from '../../context';

let data = [];

['上海市', '北京市'].forEach((name) => {
  data.push({ name, value: Math.round(10000 * Math.random() * 100) / 100 });
});

// console.log(data);

let geoGpsMap = [121.4648, 31.2891];
let t = 1; //流入流出控制
let r = 1; //右侧流入流出文字控制
let geoCoordMap = {
  江苏: [118.8062, 31.9208],
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891],
  西藏: [91.11, 29.97],
};

let d1 = {
  江苏: 10041,
  黑龙江: 4093,
  内蒙古: 1157,
  吉林: 4903,
  北京市: 2667,
  辽宁: 8331,
  河北: 23727,
  天津: 681,
  山西: 5352,
  陕西: 38,
  甘肃: 77,
  宁夏: 65,
  青海: 10,
  新疆: 22000,
  四川: 309,
  重庆: 77,
  山东: 21666,
  河南: 15717,
  安徽: 15671,
  湖北: 3714,
  浙江: 3141,
  福建: 955,
  江西: 4978,
  湖南: 778,
  贵州: 33,
  云南: 149,
  广东: 1124,
  广西: 125,
  海南: 7,
  上海: 2155,
  西藏: 0,
};

let d2 = {
  江苏: 159,
  黑龙江: 5,
  内蒙古: 54,
  吉林: 10,
  北京市: 0,
  辽宁: 0,
  河北: 1679,
  天津: 1,
  山西: 2698,
  陕西: 1744,
  甘肃: 362,
  宁夏: 429,
  青海: 122,
  新疆: 731,
  四川: 3925,
  重庆: 1480,
  山东: 79,
  河南: 1017,
  安徽: 208,
  湖北: 1209,
  浙江: 1418,
  福建: 1237,
  江西: 1004,
  湖南: 1511,
  贵州: 345,
  云南: 1429,
  广东: 2242,
  广西: 2271,
  海南: 59,
  上海: 8,
  西藏: 0,
};

let d3 = {
  江苏: 11788,
  黑龙江: 1944,
  内蒙古: 2954,
  吉林: 3482,
  北京市: 1808,
  辽宁: 5488,
  河北: 27035,
  天津: 2270,
  山西: 13623,
  陕西: 4221,
  甘肃: 754,
  宁夏: 1783,
  青海: 91,
  新疆: 1907,
  四川: 4905,
  重庆: 1420,
  山东: 39781,
  河南: 16154,
  安徽: 7914,
  湖北: 6802,
  浙江: 5812,
  福建: 3345,
  江西: 4996,
  湖南: 5627,
  贵州: 1504,
  云南: 2725,
  广东: 6339,
  广西: 1009,
  海南: 0,
  上海: 1988,
  西藏: 0,
};

let d4 = {
  江苏: 10041,
  黑龙江: 4093,
  内蒙古: 1157,
  吉林: 4903,
  北京市: 2667,
  辽宁: 8331,
  河北: 23727,
  天津: 681,
  山西: 5352,
  陕西: 38,
  甘肃: 77,
  宁夏: 65,
  青海: 10,
  新疆: 193,
  四川: 309,
  重庆: 77,
  山东: 21666,
  河南: 15717,
  安徽: 15671,
  湖北: 3714,
  浙江: 3141,
  福建: 955,
  江西: 4978,
  湖南: 778,
  贵州: 33,
  云南: 149,
  广东: 1124,
  广西: 125,
  海南: 7,
  上海: 2155,
  西藏: 0,
};

let d5 = {
  江苏: 159,
  黑龙江: 5,
  内蒙古: 54,
  吉林: 10,
  北京市: 0,
  辽宁: 0,
  河北: 1679,
  天津: 1,
  山西: 2698,
  陕西: 1744,
  甘肃: 362,
  宁夏: 429,
  青海: 122,
  新疆: 731,
  四川: 3925,
  重庆: 1480,
  山东: 79,
  河南: 1017,
  安徽: 208,
  湖北: 1209,
  浙江: 1418,
  福建: 1237,
  江西: 1004,
  湖南: 1511,
  贵州: 345,
  云南: 1429,
  广东: 2242,
  广西: 2271,
  海南: 59,
  上海: 8,
  西藏: 0,
};

let d6 = {
  江苏: 11788,
  黑龙江: 1944,
  内蒙古: 2954,
  吉林: 3482,
  北京市: 1808,
  辽宁: 5488,
  河北: 27035,
  天津: 2270,
  山西: 13623,
  陕西: 4221,
  甘肃: 754,
  宁夏: 1783,
  青海: 91,
  新疆: 1907,
  四川: 4905,
  重庆: 1420,
  山东: 39781,
  河南: 16154,
  安徽: 7914,
  湖北: 6802,
  浙江: 5812,
  福建: 3345,
  江西: 4996,
  湖南: 5627,
  贵州: 1504,
  云南: 2725,
  广东: 6339,
  广西: 1009,
  海南: 0,
  上海: 1988,
  西藏: 0,
};

var colors = ['#1DE9B6', '#EEDD78', '#32C5E9', '#FFDB5C', '#37A2DA', '#04B9FF'];
var colorIndex = 0;

var year = ['2018年', '2019年', '2020年', '2021年', '2022年', '2023年'];
var mapData = [[], [], [], [], [], []];

/*柱子Y名称*/
var categoryData = [];
var barData = [];

for (var key in geoCoordMap) {
  mapData[0].push({
    year: '2020-01',
    name: key,
    value: d1[key] / 100,
    value1: d1[key] / 100,
  });
  mapData[1].push({
    year: '2020-02',
    name: key,
    value: d2[key] / 100,
    value1: d2[key] / 100,
  });
  mapData[2].push({
    year: '2020-03',
    name: key,
    value: d3[key] / 100,
    value1: d3[key] / 100,
  });
  mapData[3].push({
    year: '2020-04',
    name: key,
    value: d4[key] / 100,
    value1: d4[key] / 100,
  });
  mapData[4].push({
    year: '2020-05',
    name: key,
    value: d5[key] / 100,
    value1: d5[key] / 100,
  });
  mapData[5].push({
    year: '2020-06',
    name: key,
    value: d6[key] / 100,
    value1: d6[key] / 100,
  });
}

for (var i = 0; i < mapData.length; i++) {
  mapData[i].sort(function sortNumber(a, b) {
    return a.value - b.value;
  });
  barData.push([]);
  categoryData.push([]);
  for (var j = 0; j < mapData[i].length; j++) {
    categoryData[i].push(mapData[i][j].name);
  }
  for (var j = 0; j < mapData[i].length; j++) {
    barData[i].push(mapData[i][j].value1);
  }
}

const convertData = (data) => {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

const convertToLineData = (data, gps) => {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var toCoord = geoCoordMap[dataItem.name];
    var fromCoord = gps; //郑州
    //  var toCoord = geoGps[Math.random()*3];
    if (fromCoord && toCoord) {
      if (t == 1) {
        res.push([
          {
            coord: toCoord,
          },
          {
            coord: fromCoord,
            value: dataItem.value,
          },
        ]);
      } else {
        res.push([
          {
            coord: fromCoord,
            value: dataItem.value,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
  }
  if (t == 0) {
    t = 1;
  } else {
    t = 0;
  }
  return res;
};

let optionXyMap01 = {
  timeline: {
    data: year,
    axisType: 'category',
    autoPlay: true,
    playInterval: 5000,
    left: '10%',
    right: '10%',
    bottom: '3%',
    width: '80%',
    //  height: null,
    label: {
      textStyle: {
        color: '#ddd',
      },
      emphasis: {
        textStyle: {
          color: '#fff',
        },
      },
    },
    symbolSize: 10,
    lineStyle: {
      color: '#555',
    },
    checkpointStyle: {
      borderColor: '#777',
      borderWidth: 2,
    },
    controlStyle: {
      showNextBtn: true,
      showPrevBtn: true,
      normal: {
        color: '#666',
        borderColor: '#666',
      },
      emphasis: {
        color: '#aaa',
        borderColor: '#aaa',
      },
    },
  },
  baseOption: {
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    grid: {
      right: '2%',
      top: '3%',
      bottom: '15%',
      width: '16%',
    },
    tooltip: {
      trigger: 'axis', // hover触发器
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        shadowStyle: {
          color: 'rgba(150,150,150,0.1)', //hover颜色
        },
      },
    },
    visualMap: {
      // min: 0,
      // max: 250,
      left: 'left',
      top: 'bottom',
      // text: ['5000万元', '低'],
      textStyle: {
        color: 'white',
      },
      calculable: true,
      colorLightness: [0.8, 100],
      color: ['#c05050', '#e5cf0d', '#5ab1ef'],
      dimension: 0,
    },
    geo: {
      show: true,
      map: 'china',
      roam: true,
      zoom: 1,
      center: [113.83531246, 34.0267395887],
      label: {
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          shadowColor: 'rgba(128, 217, 248, 1)',
          // shadowColor: 'rgba(255, 255, 255, 1)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0,
        },
      },
    },
  },
  options: [],
};

function ChinaMap() {
  const ref = useRef(null);
  const { typeName } = useContext(Context);
  const { option, setOption } = useState(optionXyMap01);

  for (var n = 0; n < year.length; n++) {
    var statistic_name = '' + (r == 1 ? '采购' : '销售') + '合同';
    optionXyMap01.options.push({
      //   title: [
      //   {
      //     text: '合同签约金额',
      //     //subtext: '   ',
      //     left: '35%',
      //     top: '3%',
      //     textStyle: {
      //       color: '#fff',
      //       fontSize: 20,
      //     },
      //   },
      //   {
      //     id: 'statistic',
      //     text: typeName,
      //     left: '85%',
      //     top: '3%',
      //     textStyle: {
      //       color: '#fff',
      //       fontSize: 16,
      //     },
      //   },
      // ],
      xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        min: 0,
        boundaryGap: false,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 1,
          textStyle: {
            color: '#aaa',
          },
        },
      },
      yAxis: {
        type: 'category',
        //  name: 'TOP 20',
        nameGap: 16,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ddd',
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#ddd',
          },
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#ddd',
          },
        },
        data: categoryData[n],
      },
      series: [
        //未知作用
        {
          //文字和标志
          name: 'light',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(mapData[n]),
          symbolSize: function (val) {
            return 6;
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: colors[n],
            },
          },
        },
        //地图？
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 1, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff',
              },
            },
          },
          roam: false,
          itemStyle: {
            areaColor: '#031525',
            borderColor: '#FFFFFF',
            emphasis: {
              areaColor: '#2B91B7',
            },
          },
          animation: false,
          data: mapData,
          layoutCenter: ['30%', '50%'], //位置
          layoutSize: '65%', //大小
        },
        //地图点的动画效果
        {
          //  name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(
            mapData[n]
              .sort(function (a, b) {
                return b.value - a.value;
              })
              .slice(0, 20)
          ),
          symbolSize: function (val) {
            return 5;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: colors[n],
              shadowBlur: 10,
              shadowColor: colors[n],
            },
          },
          zlevel: 1,
        },
        //地图线的动画效果
        {
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            period: 5, //箭头指向速度，值越小速度越快
            trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 6, //图标大小
          },
          lineStyle: {
            normal: {
              color: colors[n],
              width: 1, //尾迹线条宽度
              opacity: 0.2, //尾迹线条透明度
              curveness: 0.3, //尾迹线条曲直度
            },
          },
          data: convertToLineData(mapData[n], geoGpsMap),
        },
        //柱状图
        {
          zlevel: 1.5,
          type: 'bar',
          barMaxWidth: 8,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: colors[n],
              barBorderRadius: [0, 30, 30, 0],
            },
          },
          data: barData[n],
        },
      ],
      tooltip: {
        // 提示框
        trigger: 'item', // 触发类型
        showDelay: 0, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
        transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
        formatter: function (params) {
          // console.log(params);
          // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
          let { data = {} } = params; // 第一个参数 `params` 是 formatter 需要的数据集
          let { value = 0 } = data; // 传入的数据值
          // params.name 数据名，类目名
          return `合同金额<br />${params.marker} ${params.name}: ${value} 万元`;
        },
      },
    });
    // if (r == 0) {
    //   r = 1;
    // } else {
    //   r = 0;
    // }
  }

  useEffect(() => {
    let mapInstance = echarts.init(ref.current);
    let uploadDataUrl = dataJson;
    console.log(uploadDataUrl);
    // 注册地图
    echarts.registerMap('china', uploadDataUrl);
    mapInstance.setOption(optionXyMap01);
  }, [optionXyMap01]);
  return (
    <div>
      <div style={{ width: '100%', height: '65vh' }} ref={ref}></div>
    </div>
  );
}

export default ChinaMap;

// let option = {
//   title: {
//     // 标题组件
//     text: '数据地图', // 主标题文本
//     subtext: '数据来源于 xx平台', // 副标题文本
//     sublink: 'http://xxx.html', // 副标题文本超链接
//     left: 'right', // title 组件离容器左侧的距离,如果值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
//     textStyle: {
//       color: '#000', // 主标题文字的颜色
//     },
//   },
//   geo: {
//     // 地理坐标系组件,支持在地理坐标系上绘制散点图、线图
//     map: 'china',
//     aspectScale: 0.75,
//     zoom: 1.1,
//   },
//   series: [
//     {
//       type: 'map',
//       label: {
//         show: true,
//         textStyle: {
//           color: '#1DE9B6',
//         },
//         emphasis: {
//           textStyle: {
//             color: 'rgb(183, 185, 14)',
//           },
//         },
//       },
//       zoom: 1.1,
//       map: 'china',
//       data: [
//         { name: '内蒙古', value: 1000 },
//         { name: '北京', value: 700 },
//         { name: '河北', value: 30 },
//         { name: '江苏', value: 400 },
//         { name: '西藏', value: 200 },
//       ],
//     },
//   ],
//   visualMap: {
//     // 视觉映射组件
//     type: 'continuous', // 连续型
//     left: '10%', // visualMap 组件离容器左侧的距离,值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
//     min: 0, // 指定允许的最小值
//     max: 1000, // 指定允许的最大值,这里进行动态设置
//     inRange: {
//       // 定义 **在选中范围中** 的视觉元素
//       // 图元的颜色
//       // 这里以这数组所填写的颜色点作为基准，形成一种『渐变』的色带，数据映射到这个色带上
//       color: [
//         // 橘色效果
//         '#fff',
//         '#fedeb5',
//         '#f96a35',
//         '#c3380e',
//         '#942005',
//       ],
//       // color: [ // 蓝色效果
//       //     '#e5f7ff',
//       //     '#096dd9',
//       // ]
//     },
//     text: [`${1000}万元`, `${0}万元`], // 两端的文本,如 `['High', 'Low']`
//     textStyle: {
//       color: '#1DE9B6', // visualMap 文字的颜色。
//     },
//   },
//   toolbox: {
//     // 工具导航
//     show: true, // 是否显示工具栏组件。
//     //orient: 'vertical', // 工具栏 icon 的布局朝向。
//     left: 'left', // 工具栏组件离容器左侧的距离
//     top: 'top', // 工具栏组件离容器上侧的距离
//     feature: {
//       // 各工具配置项
//       // dataView: { readOnly: false }, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
//       restore: {}, // 配置项还原
//       saveAsImage: {}, // 保存为图片
//     },
//   },
//   tooltip: {
//     // 提示框
//     trigger: 'item', // 触发类型
//     showDelay: 0, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
//     transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
//     formatter: function (params) {
//       console.log(params);
//       // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
//       let { data = {} } = params; // 第一个参数 `params` 是 formatter 需要的数据集
//       let { value = 0 } = data; // 传入的数据值
//       // params.name 数据名，类目名
//       return `合同金额<br />${params.marker} ${params.name}: ${value} 万元`;
//     },
//   },
// };
