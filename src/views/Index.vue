<template>
  <el-container class="components-layout cc-box-full">
    <el-header class="header-box cc-width-fill">
      <Header @isCollapse="toggleCollapse"></Header>
    </el-header>
    <el-container class="content-box cc-width-fill">
      <el-aside  width="auto" class="aside-box">
        <Menu :is-collapse="isCollapse"></Menu>
      </el-aside>
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
</template>

<script>
// import storageLocal from "@libs/storageLocal";
// import storageSession from "@libs/storageSession";
import Header from "./components/header/Header";
import Menu from "./components/menus/Menu";

export default {
  name: "Index",
  components: {
    Menu,
    Header,
  },
  data() {
    return {
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
  .header-box {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .content-box {
    height: calc(100vh - 60px);
    margin-top: 60px;
    .aside-box {
    }
    .main-box {
      margin: 10px;
      background-color: #fff;
    }
  }
}
</style>
