<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <van-button type="primary" class="btn-main">主要按钮</van-button>
    <img src="https://th.bing.com/th/id/R.8c372fd892b3bd371eb3a1df8bd7fc88?rik=4KxekfOQD28FKA&riu=http%3a%2f%2fwww.desktx.com%2fd%2ffile%2fwallpaper%2fscenery%2f20170303%2fdfe53a7300794009a029131a062836d5.jpg&ehk=6ayU5y%2fwtGnzhu7g%2bJimm2REgEbHGczl9Mkbg3I1%2b5I%3d&risl=&pid=ImgRaw&r=0" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
<style scoped lang="scss">
.btn-main {
  width: 120px;
  height: 50px;
  font-size: 16px;
}
img {
  width: 400px;
  height: 500px;
}
</style>
