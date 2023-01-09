import { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { data, geoData } from './geoData';

console.log(data);
let option = {
  tooltip: {
    trigger: 'item',
    formatter: ({ name, marker, value }) =>
      `${name}<br />${marker} 合同总金额 ${value} 万元`,
  },
  series: [
    {
      type: 'map',
      map: 'China',
      zoom: 1.28,
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
      data,
      visualMap: {
        show: true,
        min: 800,
        max: 50000,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered'],
        },
      },
    },
    // {
    //   name: '消费金额',
    //   type: 'scatter',
    //   coordinateSystem: 'geo',
    //   data: data,
    //   symbolSize: 200,
    //   emphasis: {
    //     label: {
    //       show: true,
    //     },
    //   },
    //   label: {
    //     formatter: '{b}',
    //     position: 'right',
    //     show: false,
    //   },
    //   itemStyle: {
    //     color: '#ffeb7b',
    //   },
    // },
  ],
};
console.log(option);

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
      <div ref={chartRef} className="map4"></div>
    </>
  );
};

export default Map;
