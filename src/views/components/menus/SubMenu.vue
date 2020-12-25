<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined /><span>{{ menuInfo.name }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.id">
      <template v-if="!item.children">
        <a-menu-item :key="resolvePath(item.path)" :title="item.name" :disabled="item.isDisable">
          <PieChartOutlined />
          <span>{{ item.name }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu-recursion :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import SubMenuRecursion from "./SubMenuRecursion";

export default {
  name: "SubMenu",
  components: {
    SubMenuRecursion,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    resolvePath(path) {
      return this.menuInfo.path + "/" + path;
    },
  },
};
</script>

<style scoped></style>
