<template>
  <template v-for="item in subMenuList">
    <template v-if="!item.isHidden && (Number(item.type) === 0 || Number(item.type) === 1)">
      <el-sub-menu v-if="!item.isHideSubMenu && item.children && item.children.length > 0" :key="item.id" :index="item.path" v-bind="$attrs">
        <template #title>
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <SubMenu :sub-menu-list="item.children" :base-path="item.path + '/'"></SubMenu>
      </el-sub-menu>
      <el-menu-item v-else :key="item.id" :index="resolvePath(item.path)">
        <!-- 此处图标可以自定义 -->
        <i class="iconfont" :class="item.icon || subMenuList.icon"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </template>
  </template>
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
    basePath: {
      type: String,
      default: ""
    }
  },
  methods: {
    resolvePath(path) {
      return this.basePath + path;
    },
  },
};
</script>

<style scoped></style>
