<template>
  <a-row class="cc-box-fill cc-box-full login-bg">
    <a-col :span="24" class="cc-text-center">
      desc logo demo
    </a-col>
    <a-col :span="24" class="flex-center-row cc-text-center">
      <div class="login-box">
      </div>
      <a-button @click="submitForm">login</a-button>
    </a-col>
    <a-col :span="24" class="fixed-bottom flex-center-row cc-width-fill">
      desc icp info
    </a-col>
  </a-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions("store/user", ["login"]),
    async submitForm() {
      // 调用store的登录，然后存储各种数据
      await this.login({
        username: "admin",
        password: "admin123",
      }).then(() => {
        this.$router.push({ path: "/index" });
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login-bg {
  background: url(../assets/images/login/login-bg.jpeg) no-repeat;
}
.login-box {
  width: 200px;
}
</style>
