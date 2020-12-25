<template>
  <a-menu
    v-model:default-selected-keys="selectedKeys"
    v-model:default-open-keys="openKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    @click="selectMenu"
  >
    <template v-for="item in menuList" :key="item.id">
      <template v-if="!item.children">
        <a-menu-item :key="item.path" :title="item.name" :disabled="item.isDisable">
          <PieChartOutlined />
          <span>{{ item.name }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import SubMenu from "./SubMenu";

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
    };
  },
  // 通过store获取菜单信息，且事实监控
  computed: {
    menuList() {
      return this.$store.getters["store/user/getMenus"];
    },
    selectedKeys() {
      let routers = this.$route.path.replace("/", "").split("/");
      let selected = routers[routers.length - 1].toString();
      return [selected];
    },
    openKeys() {
      let routers = this.$route.path.replace("/", "").split("/");
      let open = routers[0].toString();
      return [open];
    },
  },
  mounted() {
    console.log(this.menuList);
    console.log(this.selectedKeys);
    console.log(this.openKeys);
  },
  methods: {
    selectMenu(index) {
      this.$router.push({ path: "/" + index.key });
    },
  },
};
</script>

<style scoped></style>
