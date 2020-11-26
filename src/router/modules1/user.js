const meta = { auth: true };
export default {
  path: "/index",
  name: "index",
  component: () => import("@/views/Home"),
  meta,
  children: [
    {
      path: "/home1",
      name: "home1",
      component: () => import("@/views/Home"),
      meta,
    },
  ],
};
