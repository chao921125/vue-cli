<template>
    <router-view v-if="reload" v-loading.fullscreen.lock="isLoading"/>
</template>

<script>
import { isMobile } from "@/libs/common";

export default {
  name: "App",
  // 跨父子传递参数
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
  created() {
    // 添加监听，识别分辨率、设备，切换PC和移动设备
    // 管理端不需要添加监听
    let _this = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        // _this.changeView();
      })();
    };
    // _this.changeView();
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
    changeView() {
      const currentRouter = this.$route.path;
      const currentOrigin = window.location.origin;
      if (isMobile()) {
        if (currentRouter.indexOf("/m") > -1) return false;
        // this.$router.push({ path: '/m' + routeNow });
        // this.$router.go(0);
        // window.location.href = currentOrigin + '/m' + currentRouter;
        window.location.href = "/m/index";
      } else {
        if (currentRouter.indexOf("/m") === -1) return false;
        // this.$router.push({ path: routeNow.replace('/m', '') });
        // this.$router.go(0);
        window.location.href = currentOrigin + currentRouter.replace("/m", "");
      }
    },
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
