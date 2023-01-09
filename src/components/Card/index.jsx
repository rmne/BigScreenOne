import { useContext, useEffect, useState } from 'react';

import Chart from '../Chart';

import Context from '../../context';

const Card = ({ title, option }) => {
  const { typeName } = useContext(Context);
  const tooltip = (name) => {
    return {
      formatter: (params) => {
        // console.log(params);
        let html = '';
        html += `${params[0].axisValueLabel}<br>`;
        params.forEach((val) => {
          const { marker, data } = val;
          const value = val.value[val.encode.y[0]];
          if (value === '') {
            html += '';
          } else {
            html += `${marker} ${name}合同 ${data} 万元<br>`;
          }
        });
        return html;
      },
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    };
  };

  const [chartOption, setChartOption] = useState({
    ...option,
    tooltip: tooltip(typeName),
  });

  useEffect(() => {
    switch (option.name) {
      case 'option_left1':
        setChartOption({
          ...option,
          tooltip: tooltip(typeName),
          dataset: {
            source: [
              ['合同', '合同金额'],
              ['2019年', (Math.random() * 200).toFixed(2)],
              ['2020年', (Math.random() * 300).toFixed(2)],
              ['2021年', (Math.random() * 300).toFixed(2)],
              ['2022年', (Math.random() * 500).toFixed(2)],
              ['2023年', (Math.random() * 500).toFixed(2)],
            ],
          },
        });
        break;
      case 'option_left2':
        setChartOption({
          ...option,
          tooltip: tooltip(typeName),
          dataset: {
            source: [
              ['公司名称', '合同合计金额'],
              ['绿地控股', (Math.random() * 500).toFixed(2)],
              ['蒙牛', (Math.random() * 500).toFixed(2)],
              ['伊利', (Math.random() * 500).toFixed(2)],
              ['光明', (Math.random() * 500).toFixed(2)],
              ['味全', (Math.random() * 500).toFixed(2)],
            ],
          },
        });
        break;
      case 'option_right1':
        let source;
        if (typeName === '销售') {
          source = [
            ['分类', '金额'],
            ['二次销售', (Math.random() * 5000).toFixed(2)],
            ['服务销售', (Math.random() * 5000).toFixed(2)],
            ['产品销售', (Math.random() * 5000).toFixed(2)],
          ];
        } else {
          source = [
            ['分类', '金额'],
            ['服务采购', (Math.random() * 5000).toFixed(2)],
            ['工程采购', (Math.random() * 5000).toFixed(2)],
            ['货物采购', (Math.random() * 5000).toFixed(2)],
          ];
        }
        setChartOption({
          ...option,
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} 万元 ({d}%)',
          },
          dataset: { source },
        });
    }
  }, [typeName, title]);
  // console.log(chartOption, typeName);

  return (
    <div className="boxall" style={{ height: '3.1rem' }}>
      <div className="alltitle">{title}</div>
      <Chart option={chartOption} />
      <div className="boxfoot"></div>
    </div>
  );
};

export default Card;
