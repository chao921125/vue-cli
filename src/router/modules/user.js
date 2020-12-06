const meta = { auth: true };
export default [
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/Index"),
    meta: {
      title: "index",
      icon: "index",
      ...meta,
    },
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/Demo"),
    meta: {
      title: "demo",
      icon: "demo",
      ...meta,
    },
  },
];
