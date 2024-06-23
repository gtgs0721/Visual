import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './MyChart.css';

const MyChart = ({ data }) => {
  const getOption = () => ({
    title: {
      text: '各省宗教活动场所数量分布',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: data.map(item => item.province),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.map(item => item.count),
        type: 'bar',
      },
    ],
  });

  return <ReactEcharts option={getOption()} style={{ height: '400px', width: '100%' ,color: 'rgba(255,255,255)' 
  }} />;
};

export default MyChart;
