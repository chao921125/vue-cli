<template>
  <div>模仿vue2的filter，在3中写成了全局函数，调用方式：$filters.method <p v-for="item in 10" :key="item">{{ item + "=" + $filters.testFilter(item) }}</p></div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss"></style>
