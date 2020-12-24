<template>
  <el-container class="header">
    <el-header>
      <div :class="isCollapse ? 'logo logo-collapse' : 'logo'">
        <object
          v-show="!isCollapse"
          :data="imgSrc[0]"
          width="210"
          height="50"
          type="image/svg+xml"
          codebase="http://www.adobe.com/svg/viewer/install/"
        />
        <object
          v-show="isCollapse"
          :data="imgSrc[1]"
          width="55"
          height="50"
          type="image/svg+xml"
          codebase="http://www.adobe.com/svg/viewer/install/"
        />
      </div>
      <div class="com-pointer change-collapse">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapse"></i>
      </div>
      <div :class="isCollapse ? 'com-text-right info-collapse' : 'com-text-right info'">
        <router-link to="/test">Test</router-link>
      </div>
    </el-header>
  </el-container>
  <el-container class="content">
    <el-aside width="auto">
      <!--      <menu-main :isCollapse="isCollapse" class="el-menu-main"></menu-main>-->
    </el-aside>
    <el-main><router-view /></el-main>
  </el-container>
  <div class="title">Home1</div>
  <div class="test-box"></div>
</template>

<script>
// import storageLocal from "@libs/storageLocal";
// import storageSession from "@libs/storageSession";
export default {
  name: "ElementPlus",
  data() {
    return {
      imgSrc: [require("@assets/logo.png"), require("@assets/logo.png")],
      isCollapse: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 16px;
}
.test-box {
  background-color: aqua;
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>
