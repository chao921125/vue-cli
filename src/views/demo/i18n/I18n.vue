<template>
  <el-switch
    v-model="i18n"
    active-text="中文"
    inactive-text="EN"
    @change="changeI18n">
  </el-switch>
  {{ $t("testName") }}
</template>

<script>
import Storage from "@/libs/storage";
export default {
  name: "I18n",
  inject: ['reload'],
  data() {
    return {
      i18n: true
    }
  },
  created() {
    this.i18n = this.$store.getters["store/i18n/getI18n"] === this.$constants.i18n.ZHCN;
  },
  methods: {
    changeI18n() {
      const language = this.i18n ? this.$constants.i18n.ZHCN : this.$constants.i18n.ENUS;
      Storage.setSessionItem("i18n", language);
      this.$store.dispatch("store/i18n/setI18n", language);
      this.reload();
    }
  }
};
</script>

<style scoped>

</style>
