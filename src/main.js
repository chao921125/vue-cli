import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "lib-flexible";
import "./index.css";
import "@/plugins/global";

const app = createApp(App);

// 全局挂载
// app.config.globalProperties.$Api = Api;
// app.use(Api);

// 自定义元素
app.config.isCustomElement = (tag) => tag.startsWith("ion-");

app.component("button-counter", {
  data: () => ({
    count: 0,
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>',
});

// 锚点
app.directive("anchor", {
  mounted: (el, binding) => {
    el.onclick = () => {
      document.documentElement.scrollTop = document.getElementById("anchor-" + binding.value).offset().top;
    };
  },
});

// 在应用之间共享配置 (如组件或指令) 的一种方法是创建工厂功能
// const createMyApp = options => {
//   const app = createApp(options)
//   app.directive('focus' /* ... */)
//
//   return app
// }
//
// createMyApp(Foo).mount('#foo')
// createMyApp(Bar).mount('#bar')

app.use(router).use(store).mount("#app");
