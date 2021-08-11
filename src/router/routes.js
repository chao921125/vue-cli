// import demo from "./modules/demo";

/**
 * 无需权限访问、或重定向路由定义
 */
/**
 * 主框架内，包含侧栏、导航
 * @type {*[]}
 */
const frameInSide = [];

/**
 * 主框架内，包含导航
 * @type {*[]}
 */
const frameNoSide = [
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

export default [...frameInSide, ...frameNoSide, ...frameOut];
