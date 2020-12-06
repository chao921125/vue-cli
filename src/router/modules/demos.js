const meta = { auth: true };
export default [
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/demo/Table"),
    meta: {
      title: "table",
      icon: "table",
      ...meta,
    },
  },
  {
    path: "/table/table-details",
    name: "table-details",
    component: () => import("@/views/demo/Table-details"),
    meta: {
      title: "详情",
      icon: "table",
      ...meta,
    },
  },
];
