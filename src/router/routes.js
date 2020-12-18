// import demo from "./modules/demo";

/**
 * 无需权限访问、或重定向路由定义
 */
export default [
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
  // 404
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
];
