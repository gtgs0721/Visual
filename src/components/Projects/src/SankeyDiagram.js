// src/SankeyDiagram.js
import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const SankeyDiagram = ({ data }) => {
  const chartRef = useRef(null);

  const option = {
    title: {
      text: 'Sankey Diagram',
      textStyle: {
        fontFamily: 'Arial', // 修改标题字体
        fontSize: 28, // 修改标题字体大小
        fontWeight: 'bold', // 修改标题字体粗细
        color:"black" // 修改标题字体颜色
      }
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    series: [
      {
        type: 'sankey',
        data: data.nodes,
        links: data.links,
        emphasis: {
          focus: 'adjacency',
        },
        lineStyle: {
          color: 'gradient',
          curveness: 0.5,
        },
      },
    ],
  };

  const handleExportSVG = () => {
    const chartInstance = chartRef.current.getEchartsInstance();
    const svgData = chartInstance.getDataURL({
      type: 'svg',
      backgroundColor: '#fff',
      renderer: 'svg', // Ensure the renderer is set to 'svg'
    });

    const link = document.createElement('a');
    link.href = svgData;
    link.download = 'sankey-diagram.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{ height: '600px', width: '100%' }}
        opts={{ renderer: 'svg' }} // Ensure the renderer is set to 'svg'
        echarts={echarts}
      />
      <button onClick={handleExportSVG}>导出SVG</button>
    </div>
  );
};

export default SankeyDiagram;
