import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { treeData } from './treeData1';  // 导入树图数据

const BuddhismTreeChart = () => {
    const getOption = () => {
        return {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    data: [treeData],  // 使用导入的树图数据
                    top: '8%', // 距离上边界的距离
                    left: '65%', // 调整左侧距离以增加分叉间距
                    bottom: '5%', // 距离底部的距离
                    right: '1%', // 调整右侧距离以增加分叉间距
                    symbolSize: 12, // 节点的大小
                    symbolColor: '#000000',
                    orient: 'vertical',  // 设置树图方向为垂直向下
                    label: {
                        position: 'top', // 节点标签位置
                        verticalAlign: 'middle', // 垂直对齐方式
                        align: 'left', // 水平对齐方式
                        fontSize: 12, // 字体大小
                        rotate: 0, // 旋转角度
                        backgroundColor: 'none', // 背景颜色
                        color: '#000000', // 设置节点文字颜色为黑色
                        fontFamily: 'FZSJSJW', // 设置字体
                    },
                    leaves: {
                        label: {
                            position: 'bottom', // 叶节点标签位置
                            verticalAlign: 'middle', // 垂直对齐方式
                            align: 'center', // 水平对齐方式
                            rotate: 0, // 旋转角度
                            backgroundColor: 'none', // 背景颜色
                            color: '#000000' // 设置叶节点文字颜色为黑色
                        }
                    },
                    expandAndCollapse: true, // 可展开和折叠
                    initialTreeDepth: -1,  // 设置初始展开深度为全部展开
                    lineStyle: { // 设置树图线条样式
                        color: '#888888' // 设置线条颜色
                    },
                    animationDuration: 50, // 设置动画时长为50毫秒
                    emphasis: { // 设置节点高亮样式
                        focus: 'descendant', // 高亮方式为点击后高亮该节点的所有子孙节点
                        lineStyle: { // 设置高亮状态下的线条样式
                            color: '#999999' // 设置高亮状态下的线条颜色
                        }
                    },
                    symbol: 'circle', // 设置节点的图形为圆圈
                    symbolKeepAspect: true, // 保持圆圈的长宽比
                    symbolOffset: [0, 0], // 调整圆圈的偏移位置
                    symbolBorderColor: '#000000', // 设置节点圆圈边框颜色为黑色
                    symbolBorderWidth: 2, // 设置节点圆圈边框宽度
                }
            ]
        };
    };

    return (
        <ReactEcharts option={getOption()} style={{ textAlign: "right", height: '800px', width: '100%' }} />
    );
};

export default BuddhismTreeChart;
