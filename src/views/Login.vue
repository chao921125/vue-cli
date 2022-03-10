<template>
  <el-row class="cc-box-fill cc-box-full login-bg">
    <el-col :span="24" class="login-box">
      <el-col :span="16" class="flex-center-row login-left">
        <el-image :src="images.loginLogo" fit="cover"></el-image>
      </el-col>
      <el-col :span="8" class="flex-center-row login-right">
        <el-form ref="loginForm" class="login-form" :model="loginForm" label-width="0">
          <el-form-item label="" prop="">
            <h1>Login</h1>
          </el-form-item>
          <el-form-item label="" prop="userName">
            <el-input v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="" prop="userPassword">
            <el-input v-model="loginForm.userPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item label="" prop="">
            <el-button class="cc-width-fill" type="primary" :disabled="isSubmit" :loading="isSubmit" @click="submitForm">login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-col>
    <Footer></Footer>
  </el-row>
</template>

<script>
import Footer from "./layout/footer/Footer";
import { mapActions } from "vuex";
import { demoMethods } from "@/api/user.js";

export default {
  name: "Login",
  components: {
    Footer
  },
  data() {
    return {
      images: this.$constants.images,
      isSubmit: false,
      loginForm: {
        userName: "admin",
        userPassword: "admin123"
      }
    }
  },
  created() {
    this.testMethod();
  },
  methods: {
    ...mapActions("store/user", ["login"]),
    async submitForm() {
      // 调用store的登录，然后存储各种数据
      this.isSubmit = true;
      await this.login({
        username: this.loginForm.userName,
        password: this.loginForm.userPassword,
      }).then(() => {
        this.isSubmit = false;
        this.$router.push({ path: "/index" });
      });
    },
    testMethod() {
      demoMethods({id: 2}).then(res => {
        console.log(res);
      });
    }
  },
};
</script>

<style scoped lang="scss">
.login-bg {
  background: url(../assets/images/login/login-bg.jpeg) no-repeat;
  background-size: 100% 100%;
  min-height: 768px;
}
.login-box {
  padding-top: 50px;
  .login-left {
    width: calc(100% - 500px);
  }
  .login-right {
    width: 500px;
    .login-form {
      width: 300px;
      padding: 10px 30px;
      background-color: #FFF;
      border-radius: 10px;
    }
  }
}
</style>
