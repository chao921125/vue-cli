import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "lib-flexible";
import "@/plugins/config";
import "@/plugins/global";
// import "@/plugins/i18n"; // TODO 3.0版本如何配置国际化

createApp(App).use(router).use(store).mount("#app");
