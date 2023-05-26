export default [
	{
		path: "/home",
		name: "home",
		component: () => import("@/views/home/Home.vue"),
		meta: {
			hidden: false,
			icon: "",
			noCache: false,
			title: "首页",
			auth: true,
		},
	},
	{
		path: "/test",
		name: "test",
		meta: {
			hidden: false,
			icon: "",
			noCache: false,
			title: "测试",
			auth: true,
		},
		children: [],
	},
];
