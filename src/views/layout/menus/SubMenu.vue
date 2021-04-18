<template>
  <el-submenu :index="subMenuList.path" v-bind="$attrs">
    <template #title>
      <i :class="subMenuList.icon"></i>
      <span>{{ subMenuList.title }}</span>
    </template>
    <template v-for="item in subMenuList.children">
      <el-menu-item v-if="!item.children || item.children.length === 0" :key="item.id" :index="resolvePath(item.path)">
        <!-- 此处图标可以自定义 -->
        <i :class="subMenuList.icon"></i>
        <span>{{ item.title }}</span>
      </el-menu-item>
      <SubMenu v-else :key="item.id" :sub-menu-list="item"></SubMenu>
    </template>
  </el-submenu>
</template>

<script>
import SubMenu from "./SubMenu";

export default {
  name: "SubMenu",
  components: {
    SubMenu,
  },
  props: {
    subMenuList: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    resolvePath(path) {
      return this.subMenuList.path + "/" + path;
    },
  },
};
</script>

<style scoped></style>
