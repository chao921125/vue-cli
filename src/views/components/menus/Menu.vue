<template>
  <el-scrollbar>
    <el-menu
      class="menu-box"
      :default-active="selectedKeys"
      :collapse="isCollapse"
      :unique-opened="true"
      popper-append-to-body
      @select="selectMenu">
      <template v-for="item in menuList">
        <el-menu-item v-if="!item.children || item.children.length === 0" :key="item.id" :index="item.path" :disabled="!!item.isDisable">
          <!-- 此处图标可以自定义 -->
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </el-menu-item>
        <SubMenu v-else :key="item.id" :sub-menu-list="item"></SubMenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SubMenu from "./SubMenu";

export default {
  name: "Menu",
  components: {
    SubMenu,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  // 通过store获取菜单信息，且事实监控
  computed: {
    menuList() {
      return this.$store.getters["store/user/getMenus"];
    },
    selectedKeys() {
      return this.$route.path.replace("/", "");
    },
  },
  mounted() {
    console.log(this.menuList);
  },
  methods: {
    selectMenu(index) {
      this.$router.push({ path: "/" + index });
    },
  },
};
</script>

<style scoped lang="scss">
.menu-box {
  height: calc(100vh - 60px);
}
</style>
