<template>
  <router-view v-slot="{ Component }">
    <keep-alive v-if="$route.meta.isCache">
      <component :is="Component"/>
    </keep-alive>
    <component :is="Component" v-else/>
  </router-view>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style scoped lang="scss"></style>
