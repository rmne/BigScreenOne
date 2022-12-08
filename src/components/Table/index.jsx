import React from 'react';
// import { ScrollBoard } from '@jiaminghi/data-view-react';

const Table = () => {
  let config = {
    // headerBGC: '#443dc5',
    headerBGC: '#478de7',
    oddRowBGC: '#09184F',
    evenRowBGC: '#070C34',
    index: true,
    indexHeader: '序号',
    columnWidth: [80, 80, 80],
    align: ['center'],
    rowNum: 10,
    header: ['用户', '时间', '状态'],
    data: [
      ['用户1', '2020-11-11 12:00', '在线'],
      ['用户2', '2020-11-11 12:00', '离线'],
      ['用户3', '2020-11-11 12:00', '在线'],
      ['用户4', '2020-11-11 12:00', '在线'],
      ['用户5', '2020-11-11 12:00', '在线'],
      ['用户6', '2020-11-11 12:00', '离线'],
      ['用户7', '2020-11-11 12:00', '在线'],
      ['用户8', '2020-11-11 12:00', '在线'],
      ['用户9', '2020-11-11 12:00', '离线'],
      ['用户10', '2020-11-11 12:00', '离线'],
    ],
  };

  return (
    <div>
      <ScrollBoard
        config={config}
        style={{
          width: '43vh',
          height: '46vh',
          color: 'white',
        }}
      ></ScrollBoard>
    </div>
  );
};

export default Table;
