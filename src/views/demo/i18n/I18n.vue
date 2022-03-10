<template>
  <el-switch v-model="i18n" active-text="中文" inactive-text="EN" @change="changeI18n"></el-switch>
  <div>普通写法：{{ $t("testName") }}</div>
  <div>占位符写法：{{ $t("hello", { msg: "hello" }) }}</div>
</template>

<script>
import util from "@/plugins/utils";
export default {
  name: "I18n",
  inject: ['reload'],
  data() {
    return {
      i18n: true
    }
  },
  created() {
    this.i18n = this.$store.getters["store/i18n/getI18n"] === this.$constants.i18n.ZH_CN;
  },
  methods: {
    changeI18n() {
      const language = this.i18n ? this.$constants.i18n.ZH_CN : this.$constants.i18n.EN_US;
      util.storage.setSessionItem("i18n", language);
      this.$store.dispatch("store/i18n/setI18n", language);
      this.reload();
    }
  }
};
</script>

<style scoped>

</style>
