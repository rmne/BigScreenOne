import * as echarts from 'echarts';

export const data = [
  {
    code: '600519',
    stock: '绿地控股',
    fundPost: (150 + Math.random() * 10).toFixed(2),
  },
  {
    code: '000858',
    stock: '蒙牛',
    fundPost: (130 + Math.random() * 10).toFixed(2),
  },
  {
    code: '002475',
    stock: '伊利',
    fundPost: (110 + Math.random() * 10).toFixed(2),
  },
  {
    code: '600276',
    stock: '光明',
    fundPost: (80 + Math.random() * 10).toFixed(2),
  },
  {
    code: '601318',
    stock: '味全',
    fundPost: (70 + Math.random() * 10).toFixed(2),
  },
  {
    code: '000661',
    stock: '维森',
    fundPost: (60 + Math.random() * 10).toFixed(2),
  },
  {
    code: '000333',
    stock: '客户G',
    fundPost: (50 + Math.random() * 10).toFixed(2),
  },
  {
    code: '300760',
    stock: '客户H',
    fundPost: (40 + Math.random() * 10).toFixed(2),
  },
  {
    code: '300750',
    stock: '客户T',
    fundPost: (30 + Math.random() * 10).toFixed(2),
  },
  {
    code: '601888',
    stock: '客户F',
    fundPost: (20 + Math.random() * 10).toFixed(2),
  },
];

function contains(arr, dst) {
  var i = arr.length;
  while ((i -= 1)) {
    if (arr[i] == dst) {
      return i;
    }
  }
  return false;
}

var attackSourcesColor = [
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#EB3B5A',
    },
    {
      offset: 1,
      color: '#FE9C5A',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#FA8231',
    },
    {
      offset: 1,
      color: '#FFD14C',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#F7B731',
    },
    {
      offset: 1,
      color: '#FFEE96',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#395CFE',
    },
    {
      offset: 1,
      color: '#2EC7CF',
    },
  ]),
];
var attackSourcesColor1 = [
  '#EB3B5A',
  '#FA8231',
  '#F7B731',
  '#3860FC',
  '#1089E7',
  '#F57474',
  '#56D0E3',
  '#1089E7',
  '#F57474',
  '#1089E7',
  '#F57474',
  '#F57474',
];
var attaData = [];
var attaName = [];
var topName = [];
data.forEach((it, index) => {
  attaData[index] = parseFloat(it.fundPost).toFixed(2);
  attaName[index] = it.stock;
  topName[index] = `${it.code} ${it.stock}`;
});
var salvProMax = []; //背景按最大值
for (let i = 0; i < attaData.length; i++) {
  salvProMax.push(attaData[0]);
}

export const attackSourcesDataFmt = (sData) => {
  var sss = [];
  sData.forEach(function (item, i) {
    let itemStyle = {
      color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
    };
    sss.push({
      value: item,
      itemStyle: itemStyle,
    });
  });
  return sss;
};

let barOption = {
  name: 'option_right2',
  // backgroundColor: '#000',
  tooltip: {
    show: false,
    backgroundColor: 'rgba(3,169,244, 0.5)', //背景颜色（此时为默认色）
    textStyle: {
      fontSize: 16,
    },
  },
  color: ['#e43b5c', '#fc8434'],
  legend: {
    pageIconSize: [12, 12],
    itemWidth: 20,
    itemHeight: 10,
    textStyle: {
      //图例文字的样式
      fontSize: 10,
      color: '#fff',
    },
    selectedMode: false,
    data: ['个人所得(亿元)'],
    show: false,
  },
  grid: {
    left: '15%',
    right: '15%',
    bottom: '2%',
    top: '2%',
    containLabel: false,
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisPointer: {
        label: {
          show: false,
          //margin: 30
        },
      },
      padding: [5, 0, 0, 0],
      position: 'left',
      data: attaName,
      axisLabel: {
        margin: 30,
        fontSize: 10,
        align: 'left',
        padding: [2, 0, 0, 0],
        color: '#000',
        rich: {
          nt1: {
            color: '#fff',
            backgroundColor: attackSourcesColor1[0],
            width: 13,
            height: 13,
            fontSize: 10,
            align: 'center',
            borderRadius: 100,
            lineHeight: '5',
            padding: [0, 1, 2, 1],
            // padding:[0,0,2,0],
          },
          nt2: {
            color: '#fff',
            backgroundColor: attackSourcesColor1[1],
            width: 13,
            height: 13,
            fontSize: 10,
            align: 'center',
            borderRadius: 100,
            padding: [0, 1, 2, 1],
          },
          nt3: {
            color: '#fff',
            backgroundColor: attackSourcesColor1[2],
            width: 13,
            height: 13,
            fontSize: 10,
            align: 'center',
            borderRadius: 100,
            padding: [0, 1, 2, 1],
          },
          nt: {
            color: '#fff',
            backgroundColor: attackSourcesColor1[3],
            width: 13,
            height: 13,
            fontSize: 10,
            align: 'center',
            lineHeight: 3,
            borderRadius: 100,
            padding: [0, 1, 2, 1],
            lineHeight: 5,
          },
        },
        formatter: function (value, index) {
          index = contains(attaName, value) + 1;
          if (index - 1 < 3) {
            return ['{nt' + index + '|' + index + '}'].join('\n');
          } else {
            return ['{nt|' + index + '}'].join('\n');
          }
        },
      },
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        // textStyle: {
        color: '#fff',
        fontSize: '10',
        // },
      },
      data: attackSourcesDataFmt(attaName),
    },
    {
      //名称
      type: 'category',
      offset: -10,
      position: 'left',
      axisLabel: {
        color: `#fff`,
        fontSize: 10,
      },
      axisLine: {
        show: false,
      },
      inverse: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        color: ['#fff'],
        align: 'left',
        verticalAlign: 'bottom',
        lineHeight: 32,
        fontSize: 10,
        show: false,
      },
      data: topName,
    },
  ],
  series: [
    {
      zlevel: 1,
      name: '个人所得(亿元)',
      type: 'bar',
      barWidth: '15px',
      animationDuration: 1500,
      data: attackSourcesDataFmt(attaData),
      align: 'center',
      itemStyle: {
        borderRadius: 10,
        // barBorderRadius: 10,
      },
      label: {
        show: true,
        fontSize: 10,
        color: '#fff',
        textBorderWidth: 2,
        padding: [1, 0, 0, 0],
      },
    },
    {
      name: '个人所得(亿元)',
      type: 'bar',
      barWidth: 15,
      barGap: '-100%',
      margin: '20',
      // data: salvProMax,
      data: [160, 160, 160, 160, 160, 160, 160, 160, 160, 160],
      textStyle: {
        //图例文字的样式
        fontSize: 10,
        color: '#fff',
      },
      itemStyle: {
        color: '#05325F',
        //width:"100%",
        fontSize: 10,
        borderRadius: 30,
        // barBorderRadius: 30,
      },
    },
  ],
};

console.log('barOption', barOption);

export default barOption;
