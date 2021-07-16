<template>
  <el-row>
    <el-col :span="24"><el-button type="primary" @click="payTest">pay click</el-button></el-col>
    <el-col :span="24"><div id="payHtml" ref="payHtml"></div></el-col>
  </el-row>
</template>

<script>
import { payOrder } from "@/api/order";
export default {
  name: "HtmlScript",
  data() {
    return {}
  },
  methods: {
    payTest() {
      payOrder({}).then(res => {
        document.querySelector("#payHtml").innerHTML = res.form;
        document.forms[0].submit();
      });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
