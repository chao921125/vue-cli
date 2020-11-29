import { createApp } from "vue";
import util from "@plugins/utils/util";

const app = createApp({});

// 全局挂载 所有全局配置转移至@/plugins/global中配置
// app.config.globalProperties.$Api = Api;
// app.use(Api);

// 自定义元素
app.config.isCustomElement = (tag) => tag.startsWith("ion-");

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
