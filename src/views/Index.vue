<template>
  <el-container class="components-layout">
    <el-aside width="auto">
      <Menu :is-collapse="isCollapse"></Menu>
    </el-aside>
    <el-container class="content-box">
      <el-header>
        <Header @isCollapse="toggleCollapse"></Header>
      </el-header>
      <el-scrollbar>
        <el-main class="main-box">
          <router-view v-slot="{ Component }">
            <transition name="el-fade-in-linear">
              <keep-alive v-if="$route.meta.isCache">
                <component :is="Component"/>
              </keep-alive>
              <component :is="Component" v-else/>
            </transition>
          </router-view>
        </el-main>
      </el-scrollbar>
      <!--        <el-footer class="footer-box">Footer</el-footer>-->
    </el-container>
  </el-container>
</template>

<script>
// import storageLocal from "@/libs/storageLocal";
// import storageSession from "@/libs/storageSession";
import Header from "./layout/header/Header";
import Menu from "./layout/menus/Menu";

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
  overflow: hidden;
}
.content-box {
  .main-box {
    margin: 10px;
    background-color: $color-bg-white;
    height: calc(100vh - 20px - 60px);
  }
}
</style>
