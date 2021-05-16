<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      screenWidth: "",
      timer: false,
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        const that = this;
        setTimeout(() => {
          that.changeRouter();
          that.timer = false;
        }, 500);
      }
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
        that.changeRouter();
      })();
    };
    this.changeRouter();
  },
  methods: {
    changeRouter() {
      if (this.isMobile()) {
        // 手机端
        this.$router.replace({ path: "/mobile/index" });
      } else {
        // pc端
        this.$router.replace({ path: "/pc/index" });
      }
    },
    isMobile() {
      return navigator.userAgent.match(
        /(phone|pad|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
      );
    },
  },
};
</script>
