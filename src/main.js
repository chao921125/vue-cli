import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 引用工具类
import util from "@/plugins/utils";
// vue配置
const app = createApp(App);
app.config.productionTip = false;
// 处理日志信息
app.config.errorHandler = (err, vm, info) => {
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在开发模式下打印 log
  if (process.env.NODE_ENV === "development") {
    util.log.danger(">>>>>> 错误信息 >>>>>>");
    console.log(info);
    util.log.danger(">>>>>> Vue 实例 >>>>>>");
    console.log(vm);
    util.log.danger(">>>>>> Error >>>>>>");
    console.log(err);
  }
};
app.config.warnHandler = (msg, vm, trace) => {
  // 显示在控制台
  if (process.env.NODE_ENV === "development") {
    // `trace` 是组件的继承关系追踪
    util.log.warning(">>>>>> 警告信息 >>>>>>");
    console.log(msg);
    util.log.warning(">>>>>> Vue 实例 >>>>>>");
    console.log(vm);
    util.log.warning(">>>>>> Info >>>>>>");
    console.log(trace);
  }
};

// UI start
// 如果想要覆盖掉组件的样式，那么需要自定义一个less（必须），同时不能在此处顺序引入，只能在自定义文件中引入
// import Antd from "ant-design-vue";
// import "@/assets/styles/reset/ant.less";
// app.use(Antd);
// Antd icon
// import * as Icons from "@ant-design/icons-vue";
// for (const i in Icons) {
//   app.component(i, Icons[i]);
// }

import ElementPlus from "element-plus";
import "@/assets/styles/reset/element.scss";
app.use(ElementPlus, { size: "small", zIndex: 9999 });
// 定义图标
import * as ElementPlusIcons from "@element-plus/icons";
for (const iconName in ElementPlusIcons) {
  if (Reflect.has(ElementPlusIcons, iconName)) {
    app.component(iconName, ElementPlusIcons[iconName]);
  }
}
// app.use(ElementPlus);

// 全局样式定义
import "@/assets/styles/global-class.scss";

// 过渡动画
// UI end

// i18n国际化
import i18n from "@/plugins/i18n";
app.use(i18n);

// 三方插件 start
import "vuedraggable"; // 拖拽
// 三方插件：数据图
import * as echarts from "echarts";
app.config.globalProperties.$echarts = echarts;
// 三方插件 end

// 全局变量配置 start
// app.config.globalProperties.$Api = Api;
// app.use(Api);
import constants from "@/libs/constants";
app.config.globalProperties.$constants = constants;

import filters from "@/plugins/filters";
app.config.globalProperties.$filters = filters;
// 全局变量配置 end

// 移动端相关解决 start
// 像素转rem
// import "lib-flexible";
// 移动端相关解决 end

// 自定义元素
app.config.isCustomElement = (tag) => tag.startsWith("ion-");

// 自定义组件
// app.component("button-counter", {
//   data: () => ({
//     count: 0,
//   }),
//   template: "<button @click="count++">Clicked {{ count }} times.</button>",
// });

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
//   app.directive("focus" /* ... */)
//   return app
// }
//
// createMyApp(Foo).mount("#foo")
// createMyApp(Bar).mount("#bar")

if (process.env.VUE_APP_MOCK) {
  require("@/mock");
}

app.use(router).use(store).mount("#app");
