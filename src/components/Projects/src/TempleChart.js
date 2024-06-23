import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';
import templeData from './Data4.js';

const TempleChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);

    const labelThreshold = 100; // 设定显示标签的频率阈值

    const nodes = templeData.map((item, idx) => ({
      id: idx,
      name: item.name,
      value: item.value,
      symbolSize: Math.sqrt(item.value) * 2,
      itemStyle: {
        color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
      },
      label: {
        show: item.value > labelThreshold,
        position: 'right',
        formatter: '{b}',
        color: '#fff',
        fontSize: 12
      }
    }));

    const edges = [];
    const nodeMap = new Map(nodes.map(node => [node.name, node.id]));
    for (let i = 0; i < templeData.length; i++) {
      const [sourceName, targetName] = templeData[i].name.split('');
      if (nodeMap.has(sourceName) && nodeMap.has(targetName)) {
        edges.push({
          source: nodeMap.get(sourceName),
          target: nodeMap.get(targetName),
          value: templeData[i].value
        });
      }
    }

    myChart.setOption({
      backgroundColor: '#000',
      tooltip: {
        formatter: function (params) {
          if (params.dataType === 'node') {
            return params.data.name + ': ' + params.data.value;
          } else if (params.dataType === 'edge') {
            return params.data.source + ' - ' + params.data.target + ': ' + params.data.value;
          }
        }
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 300,
            edgeLength: [10, 50],
            gravity: 0.1
          },
          nodes: nodes,
          edges: edges,
          lineStyle: {
            color: 'rgba(255,255,255,0.6)',
            width: 0.5,
            curveness: 0.3
          },
          itemStyle: {
            opacity: 0.8
          },
          label: {
            show: true,
            position: 'right',
            color: '#fff',
            fontSize: 12
          },
          emphasis: {
            focus: 'adjacency',
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold'
            },
            lineStyle: {
              width: 2,
              opacity: 0.7
            }
          },
          roam: true // Enable zoom and pan
        }
      ]
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ width: '100%', height: '500px' }} />;
};

export default TempleChart;
