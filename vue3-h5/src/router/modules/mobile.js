export default [
  {
    path: "/mobile/home",
    name: "mobile-home",
    component: () => import("@/views/mobile/Home"),
    meta: {
      hidden: false,
      icon: "",
      noCache: false,
      title: "首页",
      auth: true,
    },
  },
];
