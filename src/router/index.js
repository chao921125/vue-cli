import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store";
import util from "@plugins/utils/util";
import storage from "@libs/storage";

// 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 解决路由异常，此问题不会导致出错但是控制台会有异常信息 TODO 预留不确定是否还有此类问题
// const routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch((error) => error);
// };

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/**
 * 路由拦截
 * 权限验证
 * 1、判断路由是否存在
 * 2、判断路由是否需要权限
 * 3、判断路由tooken是否过期
 */
router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start();
  if (to.matched.length === 0) {
    // 匹配路由是否存在，不存在的路由统一跳转404页面
    next({
      name: "404",
    });
    NProgress.done();
  } else {
    console.log(storage.getSessionItem("routerList"));
    router.addRoute(storage.getSessionItem("routerList"));
    if (to.matched.some((r) => r.meta.auth)) {
      // 验证当前路由所有的匹配中是否需要有登录验证的
      // 这里暂时将cookie里是否存有token作为验证是否登录的条件
      // 请根据自身业务需要修改 发送请求校验session是否到期
      // 组装动态路由的时候一定是按照菜单的格式，然后此处将菜单的数据格式转化为路由数据格式
      console.log(store);
      store.getters[``];
      // trigger a redirection
      // const token = util.cookies.get("token");
      // if (token && token !== "undefined") {
      //   next();
      //   NProgress.done();
      // } else {
      //   // 没有登录的时候跳转到登录界面
      //   // 携带上登陆成功之后需要跳转的页面完整路径
      //   next({
      //     name: "login",
      //     query: {
      //       redirect: to.fullPath,
      //     },
      //   });
      //   NProgress.done();
      // }
      next();
      NProgress.done();
    } else {
      // 不需要身份校验 直接通过，根据业务需要可自行更改
      next();
      NProgress.done();
    }
  }
});

router.afterEach((to) => {
  // 进度条
  NProgress.done();
  // 更改标题
  util.title(to.meta.title);
});

export default router;
