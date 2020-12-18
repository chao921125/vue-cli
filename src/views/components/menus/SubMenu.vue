<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined /><span>{{ menuInfo.title }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key" :title="item.title" :disabled="item.disabled">
          <PieChartOutlined />
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu-recursion :key="item.key" :menu-info="item" />
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
};
</script>

<style scoped></style>
