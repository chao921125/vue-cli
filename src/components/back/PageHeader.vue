<template>
  <el-page-header :title="title || defTitle" :content="content || defContent" @back="goBack" />
</template>

<script>
/**
 * 页眉返回，统一操作
 *
 */
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      defTitle: "返回",
      defContent: "详情"
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

</style>
