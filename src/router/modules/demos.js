export default [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home"),
    meta: {
      hidden: false,
      icon: "",
      noCache: false,
      title: "首页",
      auth: true,
    },
  },
  {
    path: "/demo",
    name: "demo",
    meta: {
      hidden: false,
      icon: "",
      noCache: false,
      title: "示例",
      auth: true,
    },
    children: [
      {
        path: "/demo/index",
        name: "demo",
        component: () => import("@/views/demo/Index"),
        meta: {
          hidden: false,
          icon: "",
          noCache: false,
          title: "测试",
          auth: true,
        },
      },
    ],
  },
];
