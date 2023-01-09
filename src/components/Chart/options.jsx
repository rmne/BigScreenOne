import * as echarts from 'echarts';

export const option_right1 = {
  name: 'option_right1',
  legend: {
    show: false,
  },
  series: [
    {
      type: 'pie',
      radius: [20, 60],
      center: ['50%', '60%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 12,
      },
    },
  ],
};

export const option_left1 = {
  name: 'option_left1',
  grid: {
    left: '0%',
    top: '10px',
    right: '0%',
    bottom: '4%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        // rotate:50,
        show: true,
        splitNumber: 15,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12',
      },
    },
  ],
  yAxis: {
    type: 'value',
    max: 500,
    splitNumber: 4,
    axisLabel: {
      formatter: '{value}万元',
      color: 'rgba(255,255,255,.6)',
      fontSize: '12',
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,.1	)',
        width: 1,
        type: 'solid',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.1)',
      },
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: '35%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        color: '#2f89cf',
        opacity: 1,
        borderRadius: 5,
        // barBorderRadius: 5,
      },
    },
  ],
};

export const option_left2 = {
  name: 'option_left2',
  grid: {
    left: '0%',
    top: '5%',
    right: '0%',
    bottom: '1%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        show: true,
        splitNumber: 15,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      max: 500,
      splitNumber: 4,
      axisLabel: {
        formatter: '{value}万元',
        color: 'rgba(255,255,255,.6)',
        fontSize: 12,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1	)',
          width: 1,
          type: 'solid',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
    },
  ],
  series: [
    {
      type: 'bar',
      barWidth: '35%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        color: '#27d08a',
        opacity: 1,
        borderRadius: 5,
        // barBorderRadius: 5,
      },
    },
  ],
};

export const option_left3 = {
  // backgroundColor: '#03141c',
  title: {
    text: '84%',
    subtext: '已回款',
    x: 'center',
    y: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'normal',
    },
    subtextStyle: {
      color: 'rgba(255,255,255,.45)',
      fontSize: 12,
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    x: 'center',
    y: 'bottom',
    data: [],
  },
  calculable: true,
  series: [
    {
      name: '面积模式',
      type: 'pie',
      radius: [40, 70],
      center: ['50%', '60%'],
      data: [
        {
          value: 34,
          name: '123',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: '#f6e3a1',
              },
              {
                offset: 1,
                color: '#ff4236',
              },
            ]),
          },
          label: {
            color: 'rgba(255,255,255,.45)',
            fontSize: 12,
            formatter: '已收款金额\n{a|3468} 万元',
            rich: {
              a: {
                color: '#fff',
                fontSize: 18,
                lineHeight: 30,
              },
            },
          },
        },
        {
          value: 52,
          name: '456',
          itemStyle: {
            color: 'transparent',
          },
          label: {
            show: false,
          },
        },
      ],
    },
    {
      name: '面积模式',
      type: 'pie',
      radius: [50, 60],
      center: ['50%', '60%'],
      data: [
        {
          value: 34,
          name: '吴际帅\n牛亚莉',
          itemStyle: {
            color: 'transparent',
          },
        },
        {
          value: 52,
          name: '应收款',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: '#348fe6',
              },
              {
                offset: 1,
                color: '#625bef',
              },
            ]),
          },
          label: {
            color: 'rgba(255,255,255,.45)',
            fontSize: 12,
            formatter: '应收款总额\n{a|5200} 万元',
            rich: {
              a: {
                color: '#fff',
                fontSize: 18,
                lineHeight: 30,
              },
            },
          },
        },
      ],
    },
  ],
};

const option3 = {
  title: [
    {
      text: '',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: '16',
      },
    },
  ],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    position: function (p) {
      //其中p为当前鼠标的位置
      return [p[0] + 10, p[1] - 10];
    },
  },
  legend: {
    top: '20%',
    left: '50%',
    itemWidth: 10,
    itemHeight: 10,
    formatter: (v) => {
      // console.log(v);
    },
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    },
  },
  series: [
    {
      name: '金额',
      type: 'pie',
      center: ['30%', '50%'],
      radius: ['30%', '70%'],
      color: [
        '#065aab',
        '#066eab',
        '#0682ab',
        '#0696ab',
        '#06a0ab',
        '#06b4ab',
        '#06c8ab',
        '#06dcab',
        '#06f0ab',
      ],
      label: { show: false },
      labelLine: { show: false },
      data: [
        { name: '应收账款', value: 47 },
        { name: '实际收款', value: 52 },
        { name: '计提坏账', value: 12 },
        { name: '坏账收回', value: 2 },
      ],
    },
  ],
};

const option1 = {
  // backgroundColor: '#2c343c',
  // title: {
  //   text: 'Customized Pie',
  //   left: 'center',
  //   top: 20,
  //   textStyle: {
  //     color: '#ccc',
  //   },
  // },
  tooltip: {
    trigger: 'item',
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: '付款情况',
      type: 'pie',
      radius: '78%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: '产品销售' },
        { value: 310, name: '服务销售' },
        { value: 274, name: '二次销售' },
        // { value: 235, name: '计提坏账' },
        // { value: 400, name: '坏账收回' },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: '#fff',
      },
      labelLine: {
        lineStyle: {},
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: '#c23531',
        // shadowBlur: 200,
        // shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
};
