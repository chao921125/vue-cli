import demo from "./modules/demos";

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
    redirect: { name: "index" },
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
    path: "/index",
    name: "index",
    redirect: { name: "home" },
    component: () => import("@/views/Index"),
    meta: {
      auth: true,
    },
    children: [...demo],
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
  // 移动端
  {
    path: "/m/index",
    name: "m-index",
    component: () => import("@/views/mobile/Index"),
    meta: {
      hidden: true,
      icon: "",
      noCache: false,
      title: "index",
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

const frameCom = [
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "login" },
  },
  {
    path: "/:pathMatch(.*)",
    redirect: { name: "login" },
  }
];

export default [...frameIn, ...frameOut, ...frameCom];
