<template>
  <el-menu
    class="menu-header-box"
    :collapse="isCollapse">
    <el-menu-item key="/" index="/" class="flex-center-row header-box">
      <div class="flex-center-row cc-pointer logo" :class="isCollapse ? 'logo-collapse' : 'logo-no-collapse'">
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
<!--      <template v-for="item in menuList">-->
<!--        <template v-if="item.isSideMenu">-->
<!--          <SubMenu v-if="item.children && item.children.length > 0" :key="item.id" :sub-menu-list="item"></SubMenu>-->
<!--          <el-menu-item v-else :key="item.id" :index="item.path" :disabled="!!item.isDisable">-->
<!--            &lt;!&ndash; 此处图标可以自定义 &ndash;&gt;-->
<!--            <i v-if="item.icon.includes('el-')" :class="item.icon"></i>-->
<!--            <i v-else class="iconfont" :class="item.icon"></i>-->
<!--            <template #title>{{ item.title }}</template>-->
<!--          </el-menu-item>-->
<!--        </template>-->
<!--      </template>-->
      <SubMenu v-if="menuList && menuList.length > 0" :sub-menu-list="menuList"></SubMenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
/**
 * 需要变更的地方，这里需要修改一个层级数
 * selectedKeys
 */
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
      let menuHierarchy = 2;
      let path = this.$route.path.replace("/", "");
      let pathArray = path.split("/");
      if (pathArray.length > menuHierarchy) {
        let returnPath = "";
        for (let i = 0; i < menuHierarchy; i++) {
          returnPath += `/${pathArray[i]}`;
        }
        return returnPath.replace("/", "");
      }
      return path;
    },
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
  height: $header-height;
  background-color: $color-bg-white;
  &:not(.el-menu--collapse) {
    height: $header-height;
    background-color: $color-bg-white;
  }
  .header-box {
    background-color: $color-bg-white;
    height: $header-height;
    padding: 0 !important;
    position: fixed;
    z-index: $z-index-max;
  }
  .logo {
    height: $header-height;
    background-color: $color-bg-white;
  }
  .logo-collapse {
    width: $menu-collapse-width !important;
    background-color: $color-bg-white;
  }
  .logo-no-collapse {
    width: $menu-width !important;
    background-color: $color-bg-white;
  }
  .img-collapse {
    width: $menu-width;
    height: $menu-item-height;
    background-color: $color-bg-white;
  }
  .img-no-collapse {
    width: $menu-collapse-width;
    height: $menu-item-height;
    background-color: $color-bg-white;
  }
}
.scroll-menu {
  height: $menu-height;
}
.menu-box {
  min-height: $menu-height;
  &:not(.el-menu--collapse) {
    width: $menu-width;
  }
}
</style>
