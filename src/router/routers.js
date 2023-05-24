export const errorRouter = [];
export const baseRouter = [
	{
		path: "/",
		name: "home",
		component: () => import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () => import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
	},
];
export default [...errorRouter, ...baseRouter];
