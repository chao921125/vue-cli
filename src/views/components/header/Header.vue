<template>
  <div class="header flex-base">
    <div :class="isCollapse ? 'flex-center-row cc-pointer transition-width-1s logo logo-collapse' : 'flex-center-row transition-width-1s cc-pointer logo logo-no-collapse'">
      <object v-show="!isCollapse" :data="imgSrc[0]" class="img-collapse" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
      <object v-show="isCollapse" :data="imgSrc[1]" class="img-no-collapse" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
    </div>
    <div class="flex-space-between cc-width-fill">
      <div class="cc-pointer flex-center-row cc-ml-5">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapse"></i>
      </div>
      <div class="flex-center-row cc-mr-20" :class="isCollapse ? 'cc-text-right info-collapse' : 'cc-text-right info'">
        <el-button type="primary" @click="logout"> logout </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import util from "@plugins/utils";

export default {
  name: "Header",
  emits: ['isCollapse'],
  data() {
    return {
      imgSrc: [require("@assets/images/header/kehu.svg"), require("@assets/images/header/shebao.svg")],
      isCollapse: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("isCollapse", this.isCollapse);
    },
    logout() {
      util.cookies.removeAll();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  .logo {
    background-color: #fff;
  }
  .logo-collapse {
    width: 65px !important;
  }
  .logo-no-collapse {
    width: 200px !important;
  }
  .img-collapse {
    width: 200px;
    height: 50px;
  }
  .img-no-collapse {
    width: 50px;
    height: 50px;
  }
}
</style>
