<template>
  <el-container class="components-layout">
    <el-header class="header-box">
      <Header @isCollapse="toggleCollapse"></Header>
    </el-header>
    <el-container class="content-box">
      <el-aside :class="isCollapse ? 'layout-aside aside-collapse transition-width-1s' : 'layout-aside aside-no-collapse transition-width-1s'">
        <Menu :is-collapse="isCollapse"></Menu>
      </el-aside>
      <el-container>
        <el-main class="main-box">
          <router-view v-slot="{ Component }">
            <keep-alive v-if="$route.meta.isCache">
              <component :is="Component"/>
            </keep-alive>
            <component :is="Component" v-else/>
          </router-view>
        </el-main>
<!--        <el-footer class="footer-box">Footer</el-footer>-->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// import storageLocal from "@libs/storageLocal";
// import storageSession from "@libs/storageSession";
import Header from "./components/header/Header";
import Menu from "./components/menus/Menu";

export default {
  name: "Home",
  components: {
    Menu,
    Header,
  },
  data() {
    return {
      imgSrc: [require("@assets/logo.png"), require("@assets/logo.png")],
      isCollapse: false,
    };
  },
  methods: {
    toggleCollapse(value) {
      this.isCollapse = value;
    },
  },
};
</script>

<style scoped lang="scss">
.components-layout {
  height: 100vh;
  min-height: 768px;
  overflow: hidden;
  .header-box {
    background-color: #fff;
    height: 60px;
    line-height: 60px;
  }
  .content-box {
    min-height: calc(768px - 60px);
  }
  .layout-aside {
    height: calc(100vh - 60px);
    min-height: calc(768px - 60px);
  }
  .aside-no-collapse {
    width: 200px !important;
  }
  .aside-collapse {
    width: 65px !important;
  }
  .main-box {
    height: 100%;
    min-height: calc(768px - 60px);
    //background-color: #C0C4CC;
  }
  .footer-box {
    height: 30px !important;
    line-height: 30px !important;;
    background-color: #d9d9d9;
  }
}
</style>
