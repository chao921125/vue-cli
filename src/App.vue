<template>
  <transition name="el-fade-in">
    <router-view v-if="reload" v-loading.fullscreen.lock="isLoading"/>
  </transition>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      reloadPage: true,
      isLoading: false,
      timeout: null,
    }
  },
  mounted() {
    if (window.name === "") {
      this.isLoading = true;
      this.timeout = setTimeout(() => {
        this.isLoading = false;
        clearTimeout(this.timeout);
      }, 1500);
    }
  },
  methods: {
    reload() {
      this.reloadPage = false;
      this.$nextTick(() => {
        this.reloadPage = true;
        // this.$router.go(0);
        window.location.reload();
      });
    }
  }
};
</script>
