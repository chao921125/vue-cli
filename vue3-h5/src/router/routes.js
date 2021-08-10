import pc from "./modules/pc";
import mobile from "./modules/mobile";

/**
 * 无需权限访问、或重定向路由定义
 */

/**
 * 主框架内，包含导航
 * @type {*[]}
 */
const frameIn = [
  {
    path: "",
    redirect: { name: "/" },
  },
  {
    path: "/",
    name: "/",
    redirect: { name: "pc-index" },
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
  {
    path: "/pc",
    name: "pc",
    redirect: { name: "pc-index" },
  },
  {
    path: "/pc/index",
    name: "pc-index",
    redirect: { name: "pc-home" },
    component: () => import("@/views/pc/Index"),
    children: [...pc],
  },
  {
    path: "/mobile",
    name: "mobile",
    redirect: { name: "mobile-index" },
  },
  {
    path: "/mobile/index",
    name: "mobile-index",
    redirect: { name: "mobile-home" },
    component: () => import("@/views/mobile/Index"),
    children: [...mobile],
  },
  {
    path: "/index-blank",
    name: "index-blank",
    component: () => import("@/views/IndexBlank"),
    meta: {
      auth: false,
    },
    children: [
      {
        path: "/error",
        name: "error",
        component: () => import("@/views/error/Error"),
        meta: {
          hidden: true,
          icon: "",
          noCache: false,
          title: "error",
          auth: true,
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/error/500"),
        meta: {
          hidden: true,
          icon: "",
          noCache: false,
          title: "500",
          auth: true,
        },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404"),
        meta: {
          hidden: true,
          icon: "",
          noCache: false,
          title: "404",
          auth: false,
        },
      },
    ],
  },
];

/**
 * 主框架外
 * @type {*[]}
 */
const frameOut = [
  // 登录
  {
    path: "/mobile/login",
    name: "mobile-login",
    component: () => import("@/views/mobile/Login"),
    meta: {
      hidden: true,
      icon: "",
      noCache: false,
      title: "login",
      auth: false,
    },
  },
  {
    path: "/mobile/register",
    name: "mobile-register",
    component: () => import("@/views/mobile/Register"),
    meta: {
      hidden: true,
      icon: "",
      noCache: false,
      title: "register",
      auth: false,
    },
  },
  {
    path: "/pc/logout",
    name: "pc-logout",
    redirect: { name: "pc-login" },
    meta: {
      auth: true,
    },
  },
  // 登录
  {
    path: "/pc/login",
    name: "pc-login",
    component: () => import("@/views/pc/Login"),
    meta: {
      hidden: true,
      icon: "",
      noCache: false,
      title: "login",
      auth: false,
    },
  },
  {
    path: "/pc/register",
    name: "pc-register",
    component: () => import("@/views/pc/Register"),
    meta: {
      hidden: true,
      icon: "",
      noCache: false,
      title: "register",
      auth: false,
    },
  },
  {
    path: "/pc/logout",
    name: "pc-logout",
    redirect: { name: "pc-login" },
    meta: {
      auth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404"),
    meta: {
      icon: "",
      title: "404",
      auth: false,
      isDisable: true,
      isCache: false,
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/error/404"),
    meta: {
      icon: "",
      title: "404",
      auth: false,
      isDisable: true,
      isCache: false,
    },
  }
];

export default [...frameIn, ...frameOut];
