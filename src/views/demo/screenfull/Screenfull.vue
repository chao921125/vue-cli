<template>
  <div>浏览器是否支持全屏：{{isScrenfullEn ? "是" : "否"}}</div>
  <div>当前是否全屏BUG：{{isScrenfull ? "是" : "否"}}</div>
  <el-button @click="screenfullShowAll" :disabled="!isScrenfullEn">全部全屏</el-button>
  <div id="screenfull" ref="screenfull" class="screenfull">
    指定区域全屏
    <el-button @click="screenfullShow" :disabled="!isScrenfullEn">区域全屏</el-button>
    <el-button @click="screenfullHide" :disabled="!isScrenfullEn">退出全屏</el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import screenfull from "screenfull";

export default defineComponent({
  name: "Screenfull",
  setup() {
    const activeName = ref("1");
    let isScrenfullEn = screenfull.isEnabled;
    let isScrenfull = screenfull.isFullscreen;
    return {
      isScrenfullEn,
      isScrenfull,
      activeName,
    }
  },
  methods: {
    screenfullShowAll() {
     screenfull.toggle();
      this.isScrenfull = !this.isScrenfull;
    },
    screenfullShow() {
     screenfull.request(document.querySelector("#screenfull"));
      this.isScrenfull = true;
    },
    screenfullHide() {
      screenfull.exit();
      this.isScrenfull = false;
    }
  }
});
</script>

<style scoped lang="scss">
.screenfull {
  background-color: #FFFFFF;
}
</style>
