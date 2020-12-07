// interface RouteConfig = {
//   path: string,
//   component?: Component,
//   name?: string, // 命名路由
//   components?: { [name: string]: Component }, // 命名视图组件
// redirect?: string | Location | Function,
//   props?: boolean | Object | Function,
//   alias?: string | Array<string>,
//   children?: Array<RouteConfig>, // 嵌套路由
//   beforeEnter?: (to: Route, from: Route, next: Function) => void,
//   meta?: any,
//
//   // 2.6.0+
//   caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
// pathToRegexpOptions?: Object // 编译正则的选项
// }
// import user from "./modules/user";
// import demos from "./modules/demos";

const meta = { auth: true };

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: "/",
    name: "",
    redirect: { name: "home" },
  },
  // {
  //   path: "/home",
  //   name: "home",
  //   redirect: { name: "index" },
  //   component: () => import("@/views/Home"),
  //   meta: {
  //     auth: true,
  //   },
  //   children: [...user, ...demos],
  // },
  {
    path: "/",
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
];

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/logout",
    name: "logout",
    redirect: { name: "login" },
    meta,
  },
];

/**
 * 错误页面
 */
const errorPage = [
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/500"),
    meta,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("@/views/404"),
  },
];

// 导出需要显示菜单的
export const frameInRoutes = frameIn;

// 重新组织后导出
export default [...frameIn, ...frameOut, ...errorPage];
