const nightingOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8',
    ],
  },
  series: [
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 80],
      center: ['45%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5,
      },
      data: [
        { value: 43, name: '二次销售' },
        { value: 28, name: '服务销售' },
        { value: 16, name: '产品销售' },
        // { value: 24, name: 'rose 4' },
        // { value: 22, name: 'rose 5' },
        // { value: 20, name: 'rose 6' },
        // { value: 18, name: 'rose 7' },
        // { value: 16, name: 'rose 8' },
      ],
      label: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '12',
      },
    },
  ],
};

export default nightingOption;
