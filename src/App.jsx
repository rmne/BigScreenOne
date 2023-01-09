import React, { useState, useEffect } from 'react';

import Context from './context';

import Card from './components/Card';
import Map from './components/Map';
import Chart from './components/Chart';
import barOption from './components/bar';
import {
  option_left1,
  option_left2,
  option_left3,
  option_right1,
} from './components/Chart/options';

import './App.css';

const sales = (Math.random() * 90000)
  .toFixed()
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const procurement = (Math.random() * 90000)
  .toFixed()
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function App() {
  // 当前选择类型的是销售还是采购
  const [typeName, setTypeName] = useState('销售');
  const [time, setTime] = useState('');

  // const [once, setOnce] = useState(0);
  const [winWidth, setWinWidth] = useState(200);
  useEffect(() => {
    setWinWidth(window.innerHeight);
    // console.log(window.innerHeight);
    // setOnce(once + 1);
  }, []);

  const handleSales = () => {
    setTypeName('销售');
  };

  const handleProcurement = () => {
    setTypeName('采购');
  };

  let t;
  const updateTime = () => {
    clearTimeout(t); //清除定时器
    let dt = new Date();
    setTime(
      `更新于：北京时间 ${dt.getFullYear()} 年 ${
        dt.getMonth() + 1
      } 月 ${dt.getDate()} 日 ${dt.getHours()}时${dt.getMinutes()}分${dt.getSeconds()}秒`
    );
    // y + '年' + mt + '月' + day + '日' + ' ' + h + '时' + m + '分' + s + '秒';
    t = setTimeout(updateTime, 1000); //设定定时器，循环运行
  };
  t = setTimeout(updateTime, 1000); //開始运行
  return (
    <Context.Provider value={{ typeName, setTypeName }}>
      <div className="App">
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
            <span id="showTime">{time}</span>
          </div>
        </div>
        <div className="mainbox">
          <ul className="clearfix">
            <li>
              <Card
                title={`近5年${typeName}合同金额合计`}
                option={option_left1}
              />
              <Card
                title={`本年度${typeName}合同按组织分布`}
                option={option_left2}
              />
              <Card title={`${typeName}情况分析`} option={option_left3} />
            </li>
            <li>
              <div className="bar">
                <div className="barbox2">
                  <ul className="clearfix">
                    <li className="pulll_left" onClick={handleSales}>
                      销售合同
                    </li>
                    <li className="pulll_left" onClick={handleProcurement}>
                      采购合同
                    </li>
                  </ul>
                </div>
                <div className="barbox">
                  <ul className="clearfix">
                    <li className="pulll_left counter" onClick={handleSales}>
                      {sales}
                    </li>
                    <li
                      className="pulll_left counter"
                      onClick={handleProcurement}
                    >
                      {procurement}
                    </li>
                  </ul>
                </div>
                <div className="barbox2">
                  <ul className="clearfix">
                    <li className="pulll_left">合同金额（万元）</li>
                    <li className="pulll_left">合同金额（万元）</li>
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
              <Card
                title={`本年度${typeName}合同按类型占比`}
                option={option_right1}
              />
              <div className="boxall" style={{ height: '6.43rem' }}>
                <div className="alltitle">{`前十大${
                  typeName == '销售' ? '客户' : '供应商'
                }交易金额`}</div>
                <Chart option={barOption} id="echart5" />
                <div className="boxfoot"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="back"></div>
      </div>
    </Context.Provider>
  );
}

export default App;
