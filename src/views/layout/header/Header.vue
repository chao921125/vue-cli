<template>
  <div :class="isCollapse ? 'header-box flex-base header-collapse' : 'header-box flex-base header-no-collapse'">
    <div class="flex-space-between cc-width-fill">
      <div class="cc-pointer flex-center-row cc-ml-5">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapse"></i>
      </div>
      <div class="flex-center-row cc-mr-20" :class="isCollapse ? 'cc-text-right info-collapse' : 'cc-text-right info'">
        <el-link class="header-user-name" type="primary" :underline="false">Hello</el-link>
        <el-dropdown>
          <el-image class="header-user-img" :src="imgSrc[0]"></el-image>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
  <div class="header-box-space"></div>
</template>

<script>
import util from "@/plugins/utils";

export default {
  name: "Header",
  emits: ['isCollapse'],
  data() {
    return {
      imgSrc: [require("@/assets/images/header/kehu.svg"), require("@/assets/images/header/shebao.svg")],
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

<style scoped lang="scss">
.header-box {
  height: $header-height;
  background-color: #fff;
  position: fixed;
  z-index: $z-index-max;
  top: 0;
}
.header-collapse {
  width: calc(100% - 65px);
}
.header-no-collapse {
  width: calc(100% - 201px);
}
.header-box-space {
  height: $header-height;
}
.header-user-name {
  margin-right: 10px;
}
.header-user-img {
  width: 50px;
  height: 50px;
  background-color: $color-bg-white;
  border-radius: 50%;
}
</style>
