<template>
  <router-view v-if="reloadPage"/>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      reloadPage: true
    }
  },
  methods: {
    reload() {
      this.reloadPage = false;
      this.$nextTick(() => {
        this.reloadPage = true;
        this.$router.go(0);
      });
    }
  }
};
</script>
