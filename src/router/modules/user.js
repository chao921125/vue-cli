const meta = { auth: true };
export default [
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/Index"),
    meta,
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/Demo"),
    meta,
  },
];
