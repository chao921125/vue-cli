<template>
  <a-row class="cc-box-fill cc-box-full login-bg">
    <a-col :span="24" class="cc-text-center">
      <a-col :span="24" class="cc-text-center">
        desc logo demo
      </a-col>
      <div class="login-box">
        <p>login</p>
        <a-button @click="submitForm">login</a-button>
      </div>
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
  background-size:100% 100%;
}
.login-box {
  width: 200px;
  height: 500px;
  position: relative;
}
</style>
