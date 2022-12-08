import { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';

const Chart = (v) => {
  let { option } = v;
  // console.log(option);
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
    if (echartsInstance && chartOption) echartsInstance.setOption(chartOption);
  }, [echartsInstance, chartOption]);

  return (
    <>
      <div className="allnav" ref={chartRef}></div>
    </>
  );
};

export default Chart;
