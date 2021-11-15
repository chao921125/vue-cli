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
];
