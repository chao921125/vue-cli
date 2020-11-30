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
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item v-for="item in 20" :key="item">
          <user-outlined />
          <span>nav {{ item }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="layout-main">
      <a-layout-header class="layout-header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <div class="content">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import storageLocal from "@libs/storageLocal";
// import storageSession from "@libs/storageSession";
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
export default {
  name: "Home",
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    return {
      imgSrc: [require("@assets/logo.png"), require("@assets/logo.png")],
      isCollapse: false,
      selectedKeys: ["1"],
      collapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
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
