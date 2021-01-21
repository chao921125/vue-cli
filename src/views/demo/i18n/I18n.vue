<template>
  <el-switch
    v-model="i18n"
    active-text="中文"
    inactive-text="EN"
    @change="changeI18n">
  </el-switch>
</template>

<script>
import Storage from "@libs/storage";
export default {
  name: "I18n",
  data() {
    return {
      i18n: true
    }
  },
  methods: {
    changeI18n() {
      const language = this.i18n ? this.$constants.i18n.ZHCN : this.$constants.i18n.ENUS;
      Storage.setSessionItem("i18n", language)
      this.$store.dispatch("store/i18n/i18nCommit", language);
      console.log(this.$store.getters["store/i18n/getI18n"]);
    }
  }
};
</script>

<style scoped>

</style>
