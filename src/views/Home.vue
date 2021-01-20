<template>
  <div>Index</div>
  <div v-for="item in 10" :key="item">{{ $filters.testFilter(item) }}</div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss"></style>
