<template>
  <a-layout class="components-layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      breakpoint="lg"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      :style="{ overflow: 'auto', height: 'calc(100vh-64px)', minHeight: '600px' }"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item v-for="item in 20" :key="item">
          <user-outlined />
          <span>nav {{ item }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '600px', marginTop: '84px' }"
      >
        {{ testVal }}
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import storageLocal from "@libs/storageLocal";
// import storageSession from "@libs/storageSession";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "Home",
  data() {
    return {
      imgSrc: [require("@assets/logo.png"), require("@assets/logo.png")],
      isCollapse: false,
      selectedKeys: ["1"],
      collapsed: false,
      testVal: this.$constants.commonCons.dmpURI,
    };
  },
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
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
  min-height: 700px;
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
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
