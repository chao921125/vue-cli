import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
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
// 可以随着后期动态添加
// const ROUTER_REGISTER = "register";
router.beforeEach((to, from, next) => {
  // await store.dispatch('system/config')
  // 进度条
  NProgress.start();
  // 验证当前路由所有的匹配中是否需要有登录验证的
  // 这里暂时将cookie里是否存有token作为验证是否登录的条件
  // 请根据自身业务需要修改 发送请求校验session是否到期
  const token = util.cookies.get("token");
  let routeF = "pc-";
  if (to.fullPath.includes("pc")) {
    routeF = "pc-";
  } else {
    routeF = "mobile-";
  }
  const ROUTER_LOGIN = routeF + "login";
  if (to.matched.length === 0) {
    // 匹配路由是否存在
    next({
      name: "404",
    });
    NProgress.done();
  } else if (to.matched.some((r) => r.meta.auth)) {
    // 验证是否需要权限
    // 判断token是否存在
    if (!token || token === "undefined") {
      // 如果不存在token，那么此时需要跳转登录页面
      next({
        name: ROUTER_LOGIN,
        query: {
          redirect: to.fullPath,
        },
      });
      NProgress.done();
    } else {
      next();
      NProgress.done();
    }
  } else {
    next();
    NProgress.done();
  }
});

router.afterEach((to) => {
  // 更改标题
  util.title(to.meta.title);
  // 进度条
  NProgress.done();
});

export default router;
