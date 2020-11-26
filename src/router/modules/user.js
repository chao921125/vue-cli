const meta = { auth: true };
export default {
  path: "/home",
  name: "home",
  component: () => import("@/views/Home.vue"),
  meta,
  children: [
    {
      path: "/demo",
      name: "demo",
      component: () => import("@/views/Demo.vue"),
      meta,
    },
  ],
};
