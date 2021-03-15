<template>
  <el-menu
    class="menu-header-box"
    :collapse="isCollapse">
    <el-menu-item key="/" index="/" class="flex-center-row header-box">
      <div :class="isCollapse ? 'flex-center-row cc-pointer logo logo-collapse' : 'flex-center-row cc-pointer logo logo-no-collapse'">
        <object v-show="!isCollapse" :data="imgSrc[0]" class="img-collapse" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
        <object v-show="isCollapse" :data="imgSrc[1]" class="img-no-collapse" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
      </div>
    </el-menu-item>
  </el-menu>
  <el-scrollbar class="scroll-menu">
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
  data() {
    return {
      imgSrc: [require("@/assets/images/header/kehu.svg"), require("@/assets/images/header/shebao.svg")],
    };
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
.menu-header-box {
  height: 60px;
  background-color: $color-bg-white;
  &:not(.el-menu--collapse) {
    height: 60px;
    background-color: $color-bg-white;
  }
  .header-box {
    background-color: $color-bg-white;
    height: 60px;
    padding: 0 !important;
    position: fixed;
    z-index: 9999;
  }
  .logo {
    height: 60px;
    background-color: $color-bg-white;
  }
  .logo-collapse {
    width: 65px !important;
  }
  .logo-no-collapse {
    width: 201px !important;
  }
  .img-collapse {
    width: 200px;
    height: 50px;
  }
  .img-no-collapse {
    width: 64px;
    height: 50px;
  }
}
.scroll-menu {
  height: calc(100% - 60px);
}
.menu-box {
  height: calc(100vh - 60px);
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
