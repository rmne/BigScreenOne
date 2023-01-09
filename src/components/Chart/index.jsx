import { useRef, useState, useEffect, useContext } from 'react';
import * as echarts from 'echarts';

const Chart = ({ option }) => {
  // console.log(option);
  const [load, setLoad] = useState(false);
  const chartRef = useRef(null);
  const [echartsInstance, setEchartsInstance] = useState();

  // useEffect(
  //   (option) => {
  //     // const getData = async () => {
  //     //   // const data = await DataProcessor().then((data) => {
  //     //   //   console.log(data);
  //     //   //   return data;
  //     //   // });
  //     //   setChartOption(option);
  //     // };
  //     // getData();
  //     // if (option.dataset) {
  //     //   option.dataset.source = [
  //     //     ['合同', '合同金额'],
  //     //     ['2019年', (Math.random() * 200).toFixed(2)],
  //     //     ['2020年', (Math.random() * 200).toFixed(2)],
  //     //     ['2021年', (Math.random() * 200).toFixed(2)],
  //     //     ['2022年', (Math.random() * 200).toFixed(2)],
  //     //     ['2023年', (Math.random() * 200).toFixed(2)],
  //     //   ];
  //     // }

  //     console.log('数据处理', option);
  //   },
  //   [typeName]
  // );

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
    if (echartsInstance && option) echartsInstance.setOption(option);
  }, [echartsInstance, option]);

  return (
    <>
      <div className="allnav" ref={chartRef}></div>
    </>
  );
};

export default Chart;
