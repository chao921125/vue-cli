import register from "./modules/register";
import user from "./modules/user";

const meta = { auth: true };

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/home",
    name: "home",
    redirect: { name: "index" },
    meta: {
      auth: true,
    },
    children: [
      // 首页 必须 name:index
      // 刷新页面 必须保留
      {
        path: "refresh",
        name: "refresh",
        hidden: true,
        component: {
          beforeRouteEnter(to, from, next) {
            next((vm) => vm.$router.replace(from.fullPath));
          },
          render: (h) => h(),
        },
      },
      // 页面重定向 必须保留
      {
        path: "redirect/:route*",
        name: "redirect",
        hidden: true,
        component: {
          beforeRouteEnter(to, from, next) {
            next((vm) => vm.$router.replace(JSON.parse(from.params.route)));
          },
          render: (h) => h(),
        },
      },
    ],
  },
  user,
  {
    path: "/service",
    name: "service",
    component: () => import("@/views/About"),
  },
];

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/About"),
  },
  {
    path: "/authLogin",
    name: "authLogin",
    component: () => import("@/views/About"),
  },
  {
    path: "/logout",
    name: "logout",
    redirect: { name: "login" },
    meta,
  },
  register,
];

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/About"),
    meta,
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/About"),
  },
];

// 导出需要显示菜单的
export const frameInRoutes = frameIn;

// 重新组织后导出
export default [...frameIn, ...frameOut, ...errorPage];
