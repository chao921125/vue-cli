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

// 可以随着后期动态添加
router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start();
  if (to.matched.length === 0) {
    // 匹配路由是否存在
    next({
      name: "404",
    });
    NProgress.done();
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
