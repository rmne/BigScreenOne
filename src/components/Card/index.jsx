import { useContext, useEffect, useState } from 'react';

import Chart from '../Chart';

import Context from '../../context';

import { attackSourcesDataFmt } from '../bar';

const Card = ({ title, option, height }) => {
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
  const [chartOption, setChartOption] = useState(null);

  useEffect(() => {
    if (option.name === 'option_right2') {
      setChartOption(option);
    } else {
      setChartOption({
        ...option,
        tooltip: tooltip(typeName),
      });
    }
  }, []);

  useEffect(() => {
    console.log(option);
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
        break;
      case 'option_right2':
      // console.log('option_right2', option);
      // const attaData = [];
      // let data = [
      //   {
      //     code: '600519',
      //     stock: '绿地控股',
      //     fundPost: (150 + Math.random() * 10).toFixed(2),
      //   },
      //   {
      //     code: '000858',
      //     stock: '蒙牛',
      //     fundPost: (130 + Math.random() * 10).toFixed(2),
      //   },
      //   {
      //     code: '002475',
      //     stock: '伊利',

      //     fundPost: (110 + Math.random() * 10).toFixed(2),
      //   },

      //   {
      //     code: '600276',

      //     stock: '光明',

      //     fundPost: (80 + Math.random() * 10).toFixed(2),
      //   },

      //   {
      //     code: '601318',

      //     stock: '味全',

      //     fundPost: (70 + Math.random() * 10).toFixed(2),
      //   },

      //   {
      //     code: '000661',

      //     stock: '维森',

      //     fundPost: (60 + Math.random() * 10).toFixed(2),
      //   },

      //   {
      //     code: '000333',

      //     stock: '客户G',

      //     fundPost: (50 + Math.random() * 10).toFixed(2),
      //   },

      //   {
      //     code: '300760',

      //     stock: '客户H',

      //     fundPost: (40 + Math.random() * 10).toFixed(2),
      //   },

      //   {
      //     code: '300750',

      //     stock: '客户T',

      //     fundPost: (30 + Math.random() * 10).toFixed(2),
      //   },

      //   {
      //     code: '601888',

      //     stock: '客户F',

      //     fundPost: (20 + Math.random() * 10).toFixed(2),
      //   },
      // ];
      // data.forEach((it, index) => {
      //   attaData[index] = parseFloat(it.fundPost).toFixed(2);
      //   // topName[index] = `${it.code} ${it.stock}`;
      // });
      // console.log('attaData', attackSourcesDataFmt(attaData));
      // let option1 = Object.assign({}, option);
      // option1.series[0].data = attaData;
      // console.log('比较', option1, chartOption);
      // // setChartOption(option1);
      // break;
    }
  }, [typeName, title]);
  // console.log(chartOption, typeName);

  return (
    <div className="boxall" style={{ height }}>
      <div className="alltitle">{title}</div>
      <Chart option={chartOption} />
      <div className="boxfoot"></div>
    </div>
  );
};

export default Card;
