<template>
  <el-row>
    <el-col :span="24"><h1>EL icon</h1></el-col>
    <el-col :span="24">使用 Icon 图标参考官方给出的demo</el-col>
    <el-col :span="24" v-text="iconText"></el-col>
    <el-col :span="24"><h1>ICONFONT icon</h1></el-col>
    <el-col :span="24">使用 Iconfont 图标参考官方给出的demo</el-col>
    <el-col :span="24" v-text="iconFontText"></el-col>
    <el-col :span="24"><h6><i><em>请注意使用上的区别，以及各个UI对i的一些样式处理</em></i></h6></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Icon",
  data() {
    return {
      iconText: "<i class='el-*'></i>",
      iconFontText: "<i class='icon-*'></i>"
    }
  }
};
</script>

<style scoped lang="scss"></style>
