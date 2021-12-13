// import demo from "./modules/demo";

/**
 * 无需权限访问、或重定向路由定义
 */
/**
 * 主框架内，包含导航
 * @type {*[]}
 */
const frameIn = [
  {
    path: "/m/index",
    name: "m-index",
    component: () => import("@/views/mobile/Index")
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
          auth: false,
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
          auth: false,
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
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
    meta: {
      hidden: true,
      icon: "",
      noCache: false,
      title: "登录",
      auth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register"),
    meta: {
      hidden: true,
      icon: "",
      noCache: false,
      title: "注册",
      auth: false,
    },
  },
  {
    path: "/logout",
    name: "logout",
    redirect: { name: "login" },
    meta: {
      auth: true,
    },
  },
];

export default [...frameIn, ...frameOut];
