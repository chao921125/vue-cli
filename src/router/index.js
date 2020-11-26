import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.afterEach((to) => {
  // 进度条
  NProgress.done();
  // 更改标题
  // util.title(to.meta.title);
});

export default router;
