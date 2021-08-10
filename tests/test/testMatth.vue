<template>
  <div></div>
</template>

<script>
import Web3 from 'web3';
import { testCon } from "@/utils/testMath";
export default {
  name: "testMatth",
  async beforeCreate() {
    await testCon();
  }
};
</script>

<style scoped>

</style>