import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store";
import util from "@/plugins/utils";

// 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const router = createRouter({
  scrollBehavior(/* to, from, savedPosition */) {
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 解决路由异常，此问题不会导致出错但是控制台会有异常信息 TODO 预留不确定是否还有此类问题
// const routerPush = router.prototype.push;
// router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch((error) => error);
// };

/**
 * 路由拦截
 * 权限验证
 * 1、判断路由是否存在
 * 2、判断路由是否需要权限
 * 3、判断路由tooken是否过期
 */
const ROUTER_LOGIN = "login";
// 可以随着后期动态添加
const WHITELIST = ["login", "register", "404", "error"];
// const ROUTER_REGISTER = "register";
router.beforeEach((to, from, next) => {
  // await store.dispatch("system/config")
  // 进度条
  NProgress.start();
  // 验证当前路由所有的匹配中是否需要有登录验证的
  // 这里暂时将cookie里是否存有token作为验证是否登录的条件
  // 请根据自身业务需要修改 发送请求校验session是否到期
  const token = util.cookies.get("token");
  // 白名单的无需经过任何判断直接next
  if (WHITELIST.includes(to.path.replaceAll("/", ""))) {
    next();
    NProgress.done();
  } else if (!token || token === "undefined") {
    // 如果不存在token，那么此时需要跳转登录页面
    next({
      name: ROUTER_LOGIN,
      query: {
        redirect: to.fullPath,
      },
    });
    NProgress.done();
  } else {
    if (store.getters["store/user/getMenus"].length > 0) {
      // 动态路由处理
      if (to.matched.length === 0) {
        // 匹配路由是否存在
        next({
          name: "404",
        });
        NProgress.done();
      } else {
        next();
        NProgress.done();
        // if (to.matched.some((r) => r.meta.auth)) {
        //   next();
        //   NProgress.done();
        // } else {
        //   // 不需要身份校验 直接通过
        // }
      }
    } else {
      store
        .dispatch("store/user/getUserInfo")
        .then((resp) => {
          resp.forEach((route) => {
            router.addRoute(route);
            router.options.routes.push(route);
          });
          next({ ...to, replace: true });
          NProgress.done();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});

router.afterEach((to) => {
  // 更改标题
  util.title(to.meta.title);
  // 进度条
  NProgress.done();
});

export default router;
