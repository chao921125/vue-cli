const meta = { auth: true };
export default [
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/demo/Table"),
    meta,
  },
];
