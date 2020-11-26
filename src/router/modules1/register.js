export default {
  path: "/home",
  name: "home",
  component: () => import("@/views/Home"),
  children: [
    {
      path: "/title",
      name: "title",
      component: () => import("@/views/Home"),
    },
  ],
};
