<template>
  <div>
    <router-link to="/404" class="cc-mr-20">404</router-link>
    <router-link to="/500" class="cc-mr-20">500</router-link>
    <router-link to="/error">error</router-link>
  </div>
  <div class="test-demo">过滤器方法测试：<span v-for="item in 10" :key="item">{{ $filters.testFilter(item) }}</span></div>
  <van-button @click="showPopup">click</van-button>
  <van-popup
    v-model:show="show"
    closeable
    close-icon="close"
    position="bottom"
    :style="{ height: '100%' }"
  />
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  }
};
</script>

<style scoped lang="scss">
.test-demo {
  font-size: 20px;
}
</style>
