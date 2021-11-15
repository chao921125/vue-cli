<template>
  <el-scrollbar>
    <el-main class="main-box">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear">
          <keep-alive v-if="$route.meta.isCache">
            <component :is="Component"/>
          </keep-alive>
          <component :is="Component" v-else/>
        </transition>
      </router-view>
    </el-main>
  </el-scrollbar>
</template>

<script>
// import storageLocal from "@/libs/storageLocal";
// import storageSession from "@/libs/storageSession";

export default {
  name: "Index",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    toggleCollapse(value) {
      this.isCollapse = value;
    },
  },
};
</script>

<style scoped lang="scss">
.components-layout {
  overflow: hidden;
}
.content-box {
  .main-box {
    margin: 10px;
    background-color: $color-bg-white;
    height: calc(100vh - 20px - 60px);
  }
}
</style>
