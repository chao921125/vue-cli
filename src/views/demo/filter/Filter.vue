<template>
  <div>{{activeName}}</div>
  <div>模仿vue2的filter，在3中写成了全局函数，调用方式：$filters.method <p v-for="item in 10" :key="item">{{ item + "=" + $filters.testFilter(item) }}</p></div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Filter",
  setup() {
    const activeName = ref("1");

    return {
      activeName,
    }
  },
});
</script>

<style scoped lang="scss"></style>
