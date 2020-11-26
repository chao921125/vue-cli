import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";
// import "@/plugins/ui";
// import "@/plugins/utils";
// import "@/plugins/filters";

// 锚点
createApp().directive("anchor", {
  inserted: function (el, binding) {
    el.onclick = function () {
      document.documentElement.scrollTop = document.getElementById("anchor-" + binding.value).offset().top;
    };
  },
});

createApp(App).use(router).use(store).mount("#app");
