<template>
  <div class="title">Home1</div>
  <div class="test-box"></div>
  <router-link to="/demo">Demo</router-link>
  <router-view />
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.title {
  font-size: 16px;
}
.test-box {
  background-color: aqua;
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>
