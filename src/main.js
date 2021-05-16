import Vue from "vue";
import App from "./App.vue";
import "@/registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/plugins/globals";
import "@/plugins/filters";

Vue.config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.silent = false; // 取消 Vue 所有的日志与警告。
// Vue.config.devtools = true; // 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。
Vue.config.performance = true; // 设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API 的浏览器上。

// 锚点
Vue.directive("anchor", {
  inserted: function (el, binding) {
    el.onclick = function () {
      document.documentElement.scrollTop = document.getElementById("anchor-" + binding.value).offset().top;
    };
  },
});

if (process.env.VUE_APP_MOCK) {
  require("@/mock");
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
