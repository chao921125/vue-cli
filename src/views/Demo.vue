<template>
  <div>Demo</div>
  <router-link to="/">home</router-link>
</template>

<script>
import { nextTick } from "vue";

export default {
  name: "Demo",
  mounted() {
    nextTick(() => {
      // 一些和DOM有关的东西
    });
  },
};
</script>

<style scoped></style>
