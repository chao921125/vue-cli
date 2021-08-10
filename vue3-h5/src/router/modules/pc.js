export default [
  {
    path: "/pc/home",
    name: "pc-home",
    component: () => import("@/views/pc/Home"),
    meta: {
      hidden: false,
      icon: "",
      noCache: false,
      title: "首页",
      auth: true,
    },
  },
];
