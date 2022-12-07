import reactLogo from './assets/react.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import './common.css';

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
        <h1> title </h1>
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
              <div className="alltitle">echart1.title</div>
              <div className="allnav" id="echart1"></div>
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3.2rem' }}>
              <div className="alltitle">echart2.title</div>
              <div className="allnav" id="echart2"></div>
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3.2rem' }}>
              <div style={{ height: '100%', width: '100%' }}>
                <div className="sy" id="fb1"></div>
                <div className="sy" id="fb2"></div>
                <div className="sy" id="fb3"></div>
              </div>
              <div className="boxfoot"></div>
            </div>
          </li>
          <li>
            <div className="bar">
              <div className="barbox">
                <ul className="clearfix">
                  <li className="pulll_left counter">123</li>
                  <li className="pulll_left counter">456</li>
                </ul>
              </div>
              <div className="barbox2">
                <ul className="clearfix">
                  <li className="pulll_left">789</li>
                  <li className="pulll_left">112343</li>
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
              <div className="map4" id="map_1"></div>
            </div>
          </li>
          <li>
            <div className="boxall" style={{ height: '3.4rem' }}>
              <div className="alltitle">echart4.title</div>
              <div className="allnav" id="echart4"></div>
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3.2rem' }}>
              <div className="alltitle">echart5.title</div>
              <div className="allnav" id="echart5"></div>
              <div className="boxfoot"></div>
            </div>
            <div className="boxall" style={{ height: '3rem' }}>
              <div className="alltitle">echart6.title</div>
              <div className="allnav" id="echart6"></div>
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
