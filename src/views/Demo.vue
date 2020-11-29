<template>
  <div>Demo{{ globalVal.ALL.description }}</div>
  <router-link to="/">home</router-link>
</template>

<script>
import { nextTick } from "vue";
import constants from "@/libs/constants";

export default {
  name: "Demo",
  data() {
    return {
      globalVal: constants.tradeType,
    };
  },
  mounted() {
    nextTick(() => {
      // 一些和DOM有关的东西
    });
  },
};
</script>

<style scoped></style>
