<template>
  <a-layout class="components-layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      breakpoint="lg"
      class="layout-sider"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <Menu :collapsed="collapsed"></Menu>
    </a-layout-sider>
    <a-layout class="layout-main">
      <a-layout-header class="layout-header">
        <span>
          <menu-unfold-outlined v-show="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-show="!collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        </span>
        <a-button type="primary" @click="logout"> logout </a-button>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <transition></transition>
        <div class="content">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import storageLocal from "@/libs/storageLocal";
// import storageSession from "@/libs/storageSession";
import Menu from "./components/menus/Menu";
import util from "@/plugins/utils";

export default {
  name: "Home",
  components: {
    Menu,
  },
  data() {
    return {
      imgSrc: [require("@/assets/logo.png"), require("@/assets/logo.png")],
      collapsed: false,
    };
  },
  mounted() {
    console.log(this.$store.getters["store/user/getMenus"]);
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    logout() {
      util.cookies.removeAll();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped lang="scss">
.components-layout {
  height: 100vh;
  overflow: hidden;
  .layout-sider {
    overflow: auto;
    height: 100vh;
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
  .layout-main {
    overflow: hidden;
    height: 100vh;
    .layout-header {
      background: #fff;
      position: fixed;
      z-index: 999;
      width: 100%;
      padding: 0;
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }
      .trigger:hover {
        color: #1890ff;
      }
    }
    .layout-content {
      width: 100%;
      height: calc(100vh - 160px);
      margin: 80px 0 20px;
      overflow: auto;
      .content {
        background: #fff;
        width: auto;
        margin: 0 16px;
        padding: 20px;
      }
    }
  }
}
</style>
