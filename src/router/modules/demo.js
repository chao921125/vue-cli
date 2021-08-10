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
    path: "/test",
    name: "test",
    meta: {
      hidden: false,
      icon: "",
      noCache: false,
      title: "测试",
      auth: true,
    },
    children: [
      {
        path: "/test/test",
        name: "test",
        component: () => import("@/views/test/TestView"),
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
