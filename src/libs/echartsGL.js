"use strict";
import * as Echarts from "echarts";
/**
 * 一个网站上使用图表，一般来说都会重复，不重复的话单独引用即可
 * 建议封装成一个一个的函数
 * 参数尽可能的考虑完全
 */
// const color = [
//   "##6a7985"
// ];
export default {
  demo(id) {
    let chartBox = document.querySelector(`#${id}`);
    let chart = Echarts.init(chartBox);
    let option = {
      xAxis: {
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
      },
      visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
          {
            gt: 1,
            lt: 3,
            color: 'rgba(0, 0, 180, 0.4)'
          },
          {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 0, 180, 0.4)'
          }
        ]
      },
      series: [
        {
          type: 'line',
          smooth: 0.6,
          symbol: 'none',
          lineStyle: {
            color: '#5470C6',
            width: 5
          },
          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
            data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
          },
          areaStyle: {},
          data: [
            ['2019-10-10', 200],
            ['2019-10-11', 560],
            ['2019-10-12', 750],
            ['2019-10-13', 580],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
          ]
        }
      ]
    };
    chart.setOption(option);
    window.onresize = () => {
      // chart.resize({
      //   width: chartBox.clientWidth,
      //   height: chartBox.clientHeight
      // });
      chart.resize();
    };
  },
  line(id, title, legendData, xAxisData, yAxisData, seriesData) {
    let chartBox = document.querySelector(`#${id}`);
    let chart = Echarts.init(chartBox);
    let option = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      legend: {
        left: "center",
        data: legendData,
        padding: 0,
        margin: 0,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: seriesData
        },
      ]
    };
    chart.setOption(option);
    window.onresize = () => {
      // chart.resize({
      //   width: chartBox.clientWidth,
      //   height: chartBox.clientHeight
      // });
      chart.resize();
    };
  },
};
