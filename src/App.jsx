import reactLogo from './assets/react.svg';
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import Map from './components/Map';
import Chart from './components/Chart';
import './App.css';
import './common.css';

const option_left1 = {
  // backgroundColor: '#00265f',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
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
      data: ['2018', '2019', '2020', '2021', '2022'],
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
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        //formatter: '{value} %'
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
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
      data: [215, 310, 222, 134, 241],
      barWidth: '35%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: '#2f89cf',
          opacity: 1,
          barBorderRadius: 5,
        },
      },
    },
  ],
};

const option_left2 = {
  //  backgroundColor: '#00265f',
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
  },
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
      data: ['维森集团', 'A公司', 'B公司', 'C公司'],
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
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        //formatter: '{value} %'
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
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
      data: [312, 213, 134, 281],
      barWidth: '35%', //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: '#27d08a',
          opacity: 1,
          barBorderRadius: 5,
        },
      },
    },
  ],
};

const option_left3 = {
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
      console.log(v);
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

const option_right1 = {
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
        { value: 335, name: '历史收款' },
        { value: 310, name: '本年收款' },
        { value: 274, name: '本年应收' },
        { value: 235, name: '计提坏账' },
        { value: 400, name: '坏账收回' },
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

const option_left4 = {
  // backgroundColor: '#03141c',
  title: {
    text: '84%',
    subtext: '销售回款金额',
    x: 'center',
    y: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'normal',
    },
    subtextStyle: {
      color: 'rgba(255,255,255,.45)',
      fontSize: 8,
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
            fontSize: 14,
            formatter: '已收款\n{a|34}万元',
            rich: {
              a: {
                color: '#fff',
                fontSize: 20,
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
            fontSize: 14,
            formatter: '部门总量\n{a|52}个',
            rich: {
              a: {
                color: '#fff',
                fontSize: 20,
                lineHeight: 30,
              },
            },
          },
        },
      ],
    },
  ],
};

function App() {
  // const [once, setOnce] = useState(0);
  const [winWidth, setWinWidth] = useState(200);
  useEffect(() => {
    setWinWidth(window.innerHeight);
    console.log(window.innerHeight);
    // setOnce(once + 1);
  }, []);

  return (
    <div className="App" style={{}}>
      <div className="canvas" style={{ opacity: '.2' }}>
        <iframe
          src="js/index.html"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
      {/**<div className="loading">
        <div className="loadbox">
          <img src="./assets/static/picture/loading.gif" /> 页面加载中...
        </div>
      </div>*/}
      <div className="head">
        <h1> 领导驾驶舱 </h1>
        <div className="weather">
          {/**<img src="./picture/weather.png"></img>
          <span>多云转小雨</span>**/}
          <span id="showTime"></span>
        </div>
      </div>
      <div className="mainbox">
        <ul className="clearfix">
          <li>
            <div className="boxall" style={{ height: '3.1rem' }}>
              <div className="alltitle">销售/采购合同金额年度分布</div>
              <Chart option={option_left1} id="echart1" />
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3.1rem' }}>
              <div className="alltitle">本年度销售/采购合同按组织分布</div>
              <Chart option={option_left2} id="echart2" />
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3.1rem' }}>
              <div className="alltitle">收款/付款</div>
              <Chart option={option_left4} id="echart3" />
              <div className="boxfoot"></div>
            </div>
          </li>
          <li>
            <div className="bar">
              <div className="barbox2">
                <ul className="clearfix">
                  <li className="pulll_left">销售合同</li>
                  <li className="pulll_left">采购合同</li>
                </ul>
              </div>
              <div className="barbox">
                <ul className="clearfix">
                  <li className="pulll_left counter">19,314</li>
                  <li className="pulll_left counter">8,963</li>
                </ul>
              </div>
              <div className="barbox2">
                <ul className="clearfix">
                  <li className="pulll_left">合同金额（万元）还没加上去</li>
                  <li className="pulll_left">合同金额</li>
                </ul>
              </div>
            </div>
            <div className="map">
              <div className="map1">
                <img src="./picture/lbx.png"></img>
              </div>
              <div className="map2">
                <img src="./picture/jt.png"></img>
              </div>
              <div className="map3">
                <img src="./picture/map.png"></img>
              </div>
              <Map />
            </div>
          </li>
          <li>
            <div className="boxall" style={{ height: '3.2rem' }}>
              <div className="alltitle">本年度销售合同按类型占比</div>
              <Chart option={option_right1} id="echart4" />
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '6.3rem' }}>
              <div className="alltitle">前十大供应商/客户</div>
              <div className="allnav" id="echart5"></div>
              <div className="boxfoot"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="back"></div>
    </div>
  );
}

export default App;
