<template>
  <el-row>
    <el-col :span="24"><h1>以下是对应vue2的写法</h1></el-col>
    <el-col :span="24"><h1>EL icon</h1></el-col>
    <el-col :span="24">使用 Icon 图标参考官方给出的demo</el-col>
    <el-col :span="24" v-text="iconText"></el-col>
    <el-col :span="24"><h1>ICONFONT icon</h1></el-col>
    <el-col :span="24">使用 Iconfont 图标参考官方给出的demo</el-col>
    <el-col :span="24" v-text="iconFontText"></el-col>
    <el-col :span="24"><h6><i><em>请注意使用上的区别，以及各个UI对i的一些样式处理</em></i></h6></el-col>
    <el-col :span="24"><h1>以下是对应vue3的写法，不再支持vue2的写法</h1></el-col>
    <el-col :span="24"><h6><i><em>el-plus上面的icon使用方法已经变了，需要单独安装</em></i></h6></el-col>
    <el-col :span="24" v-text="iconFontText3"></el-col>
    <el-col :span="24" v-text="i3Step"></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Icon",
  data() {
    return {
      iconText: "<i class='el-*'></i>",
      iconFontText: "<i class='icon-*'></i>",
      iconFontText3: "<el-icon><alarm-clock /></el-icon>",
      i3Step: "import * as ElementPlusIcons from \"@element-plus/icons\";\n" +
        "for (const iconName in ElementPlusIcons) {\n" +
        "  if (Reflect.has(ElementPlusIcons, iconName)) {\n" +
        "    app.component(iconName, ElementPlusIcons[iconName]);\n" +
        "  }\n" +
        "}"
    }
  }
};
</script>

<style scoped lang="scss"></style>
