<template>
  <el-row class="cc-box-fill cc-box-full login-bg">
    <el-col :span="24" class="cc-text-center">
      <div class="login-box">
        <p>login</p>
        <el-button @click="submitForm">login</el-button>
      </div>
    </el-col>
    <el-col :span="24" class="fixed-bottom flex-center-row cc-width-fill">
      desc icp info
    </el-col>
  </el-row>
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
        this.$router.push({ path: "/pc/index" });
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login-bg {
  background: url(../../assets/images/login/login-bg.jpeg) no-repeat;
  background-size:100% 100%;
}
.login-box {
  height: 200px;
  position: relative;
}
</style>
