<template>
  <a-menu
    v-model:selected-keys="selectedKeys"
    v-model:open-keys="openKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    @click="selectMenu"
  >
    <template v-for="item in routerList" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key" :title="item.title" :disabled="item.disabled">
          <PieChartOutlined />
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.key" :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import SubMenu from "./SubMenu";
import storage from "@libs/storage";

export default {
  name: "Menu",
  components: {
    SubMenu,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedKeys: [],
      openKeys: [],
      routerList: [],
    };
  },
  mounted() {
    this.selectedKeys = [];
    this.openKeys = [];
    this.routerList = storage.getSessionItem("menuList");
    let routers = this.$route.path.replace("/", "").split("/");
    let selected = routers[routers.length - 1].toString();
    let open = routers[0].toString();
    this.selectedKeys.push(selected);
    this.openKeys.push(open);
  },
  methods: {
    selectMenu(menu) {
      console.log("selectedKeys", this.selectedKeys);
      console.log("openKeys", this.openKeys);
      if (!menu.keyPath) {
        return false;
      }
      let keyPath = "/" + menu.keyPath.reverse().join("/");
      this.$router.push(keyPath);
    },
  },
};
</script>

<style scoped></style>
