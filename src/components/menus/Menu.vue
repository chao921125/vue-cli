<template>
  <a-menu
    :selected-keys="activeMenu"
    :open-keys="activeMenu"
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
      activeMenu: [],
      routerList: [],
    };
  },
  mounted() {
    this.activeMenu = [];
    this.routerList = storage.getSessionItem("menuList");
    let active = this.$route.path.replace("/", "").split("/")[0].toString();
    this.activeMenu.push(active);
  },
  methods: {
    selectMenu(menu) {
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
