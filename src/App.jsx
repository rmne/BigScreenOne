import reactLogo from './assets/react.svg';
import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import Chart from './components/Chart1';
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
            <div className="boxall" style={{ height: '3.2rem' }}>
              <div className="alltitle">销售/采购合同金额年度分布</div>
              <Chart option={option_left1} id="echart1" />
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3.2rem' }}>
              <div className="alltitle">本年度销售/采购合同按组织分布</div>
              <Chart option={option_left2} id="echart2" />
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3.2rem' }}>
              <div className="alltitle">收款/付款</div>
              <div className="allnav" id="echart3"></div>
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
            <div className="boxall" style={{ height: '3.4rem' }}>
              <div className="alltitle">本年度销售合同按类型占比</div>
              <div className="allnav" id="echart4"></div>
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '6.4rem' }}>
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
