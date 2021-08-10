"use strict";

export default {
  line(title, legendData, xAxisData, yAxisData, seriesData) {
    return {
      title: {
        text: title,
      },
      tooltip: {
        trigger: "axis",
        left: "left",
        textStyle: {
          align: "left",
        },
      },
      legend: {
        left: "center",
        data: legendData,
        padding: 20,
      },
      grid: {
        left: "3%",
        right: "3%",
        bottom: "15",
        containLabel: true,
      },
      /* toolbox: {
        feature: {
          saveAsImage: {}
        }
      }, */
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
        axisLine: {
          // 改变y轴和字体颜色
          lineStyle: {
            // color:"#999999"
          },
        },
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            color: "#e5e5e5",
          },
        },
        axisLine: {
          // 改变x轴和字体颜色
          lineStyle: {
            // color:"#999999"
          },
        },
      },
      /* {
        name:"联盟广告",
          type:"line",
        stack: "总量",
        data:[220, 182, 191, 234, 290, 330, 310]
      } */
      series: seriesData,
    };
  },
  lineNoYZoom(title, legendData, legendSelected, xAxisData, yAxisData, seriesData) {
    return {
      title: {
        text: title,
      },
      tooltip: {
        trigger: "axis",
        left: "left",
        textStyle: {
          align: "left",
        },
      },
      legend: {
        left: "center",
        data: legendData,
        selected: legendSelected,
        padding: 0,
        margin: 0,
      },
      grid: {
        left: "1%",
        right: "5%",
        bottom: "60px",
        containLabel: true,
        height: 300,
      },
      /* toolbox: {
        feature: {
          saveAsImage: {}
        }
      }, */
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
        axisLine: {
          // 改变y轴和字体颜色
          lineStyle: {
            // color:"#999999"
          },
        },
      },
      yAxis: {
        show: false,
      },
      dataZoom: [
        {
          type: "slider",
        },
        {
          type: "inside",
        },
      ],
      /* {
        name:"联盟广告",
          type:"line",
        stack: "总量",
        data:[220, 182, 191, 234, 290, 330, 310]
      } */
      series: seriesData,
    };
  },
  bar(title, legendData, xAxisData, yAxisData, seriesData) {
    return {
      title: {
        text: title,
        left: 10,
        top: 10,
        textStyle: {
          fontWeight: "bolder",
          fontSize: "15", // 改变data中字体大小
          color: "#596080",
        },
      },
      color: ["#0080ff"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "line", // 默认为直线，可选为："line" | "shadow"
        },
      },
      legend: {
        data: legendData,
      },
      grid: {
        top: "25%",
        left: "4%",
        right: "4%",
        bottom: "15",
        containLabel: true,
        // x:25,
        // y:45,
        // x2:5,
        // y2:20,
        // borderWidth:1
      },
      xAxis: {
        type: "category",
        data: xAxisData,
        axisLine: {
          // 改变y轴和字体颜色
          lineStyle: {
            // color:"#999999"
          },
        },
        /* axisTick: {
          alignWithLabel: true
        },
        axisLabel:{
          textStyle: {
            fontSize:8
          }
        } */
      },
      yAxis: [
        {
          type: "value",
          splitLine: {
            lineStyle: {
              color: "#e5e5e5",
            },
          },
          axisLine: {
            // 改变y轴和字体颜色
            lineStyle: {
              // color:"#999999"
            },
          },
        },
      ],
      /* {
        name:"直接访问",
          type:"bar",
        barWidth: "60%",
        data:[10, 52, 200, 334, 390, 330, 220]
      } */
      series: seriesData,
    };
  },
};
