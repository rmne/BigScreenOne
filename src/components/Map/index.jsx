import { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
// import '../../../public/js/china.js';
// import '../../../public/js/echarts.min.js';
import { data, geoData } from './geoData';
import './common.css';

let option = {
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      if (typeof params.value[2] == 'undefined') {
        return params.name + ' : ' + params.value;
      } else {
        return params.name + ' : ' + params.value[2];
      }
    },
  },
  series: [
    {
      type: 'map',
      map: 'China',
      zoom: 1.5,
      aspectScale: 0.75, //长宽比
      top: '30%',
      label: {
        show: false,
      },
      roam: false, //禁止其放大缩小
      itemStyle: {
        areaColor: '#4c60ff',
        borderColor: '#002097',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#293fff',
        },
      },
    },
    {
      name: '消费金额',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: data,
      symbolSize: function (val) {
        // return val[2] / {{form.map_1.symbolSize}};
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      label: {
        formatter: '{b}',
        position: 'right',
        show: false,
      },
      itemStyle: {
        color: '#ffeb7b',
      },
    },
  ],
};

const Map = () => {
  const [load, setLoad] = useState(false);
  const [chartOption, setChartOption] = useState(option);
  const chartRef = useRef(null);
  const [echartsInstance, setEchartsInstance] = useState();

  // useEffect((option) => {
  //   const getData = async () => {
  //     // const data = await DataProcessor().then((data) => {
  //     //   console.log(data);
  //     //   return data;
  //     // });
  //     setChartOption(option);
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    let chart = echarts.getInstanceByDom(chartRef.current);
    if (!chart) chart = echarts.init(chartRef.current);

    const resizeOb = new ResizeObserver((entries) => {
      entries.forEach((entry) =>
        echarts.getInstanceByDom(entry.target).resize()
      );
    });
    resizeOb.observe(chartRef.current);

    setEchartsInstance(chart);
  }, []);

  useEffect(() => {
    if (echartsInstance && chartOption) {
      echarts.registerMap('China', geoData);
      echartsInstance.setOption(option, true);
    }
  }, [echartsInstance, chartOption]);

  return (
    <>
      <div ref={chartRef} className="map4" id="map_1"></div>
    </>
  );
};

export default Map;
