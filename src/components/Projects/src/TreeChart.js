import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { TreeData } from './Data3';

const TreeChart = () => {
  const chartRef = useRef(null);

  const getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [TreeData],
          top: '10%',
          bottom: '10%',
          left: '10%',
          right: '10%',
          layout: 'radial',
          symbol: 'emptyCircle',
          symbolSize: 8, // 调大符号大小
          initialTreeDepth: 3,
          animationDurationUpdate: 750,
          emphasis: {
            focus: 'descendant'
          },
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 8, // 调大字体大小
            backgroundColor: 'none'
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
              fontSize: 8, // 调大字体大小
              backgroundColor: 'none'
            }
          },
          lineStyle: {
            width: 2, // 调整线条宽度
            curveness: 0.5 // 调整线条的曲率
          }
        }
      ]
    };
  };

  const handleExportSVG = () => {
    const chartInstance = chartRef.current.getEchartsInstance();
    const svgData = chartInstance.getDataURL({
      type: 'svg',
      backgroundColor: 'none',
      renderer: 'svg', // 确保渲染器设置为'svg'
    });

    const link = document.createElement('a');
    link.href = svgData;
    link.download = 'tree_chart.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <ReactECharts
        ref={chartRef}
        option={getOption()}
        style={{ height: '1600px', width: '100%' }} // 调整图表高度
        opts={{ renderer: 'svg' }} // 确保渲染器设置为'svg'
        echarts={echarts}
      />
      <button onClick={handleExportSVG}>导出为SVG</button>
    </div>
  );
};

export default TreeChart;
