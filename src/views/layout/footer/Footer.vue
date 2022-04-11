<template>
  <el-col :span="24" class="fixed-bottom flex-center-row cc-width-fill">
    <el-link :underline="false" class="footer-link">京公网安备 11000001000000号</el-link>
    <el-link :underline="false" class="footer-link">京ICP证 010101号</el-link>
    <el-link :underline="false" class="footer-link">©2099</el-link>
  </el-col>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.footer-link {
  padding: 0 10px;
}
</style>
