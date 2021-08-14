<template>
  <el-row>
    <el-col :span="24" class="item">1</el-col>
    <el-col :span="24" class="item">2</el-col>
    <el-col :span="24" class="item">3</el-col>
  </el-row>
</template>

<script>
export default {
  name: "Link",
  methods: {
    scrollTo(index) {
      // 获取需要滚动的距离
      let total = document.querySelectorAll('.item')[index].offsetTop - 45;
      // Chrome
      document.body.scrollTop = total;
      // Firefox
      document.documentElement.scrollTop = total;
      // Safari
      window.pageYOffset = total;
    }
  }
};
</script>

<style scoped>

</style>
