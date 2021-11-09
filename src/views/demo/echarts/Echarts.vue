<template>
  <el-row>
    <el-col :span="24">
      <div id="chartDemo" ref="chartDemo" class="chart-box"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <p>1、npm i element-resize-detector</p>
      <p>2、import elementResizeDetectorMaker from 'element-resize-detector';</p>
      <p>3、const erdm = elementResizeDetectorMaker();</p>
      <p>4、erdm.listenTo(document.getElementById(''), (element) => {
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        that.$nextTick(() => {
          // 使echarts尺寸重置
          echarts.resize({
            width, height
          });
        });
      });</p>
    </el-col>
  </el-row>
</template>

<script>
import echarts from "@/libs/echartsGL";
export default {
  name: "Echarts",
  data() {
    return {
      i18n: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.chartDemo();
    },
    chartDemo() {
      echarts.demo("chartDemo");
      // echarts.line("chartDemo", "", ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], null, [120, 132, 101, 134, 90, 230, 210]);
    },
  }
};
</script>

<style scoped lang="scss">
  .chart-box {
    width: 100%;
    height: 600px;
  }
</style>
