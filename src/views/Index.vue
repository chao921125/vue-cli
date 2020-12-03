<template>
  <div>Index</div>
  <div v-for="item in 100" :key="item">{{ item }}</div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style scoped></style>
