<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined /><span>{{ menuInfo.title }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <PieChartOutlined />
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.key" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped></style>
