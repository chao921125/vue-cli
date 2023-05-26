// import demo from "./modules/demo";

/**
 * 无需权限访问、或重定向路由定义
 */
/**
 * 主框架内，包含侧栏、导航
 * @type {*[]}
 */
const frameInSide = [];

/**
 * 主框架内，包含导航
 * @type {*[]}
 */
const frameNoSide = [
	// 404
	{
		path: "/error",
		name: "error",
		component: () => import("@/views/error/Error"),
		meta: {
			hidden: true,
			icon: "",
			noCache: false,
			title: "error",
			auth: true,
		},
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/views/error/NotFound.vue"),
		meta: {
			hidden: true,
			icon: "",
			noCache: false,
			title: "404",
			auth: false,
		},
	},
];

/**
 * 主框架外
 * @type {*[]}
 */
const frameOut = [
	{
		path: "",
		name: "",
		redirect: { name: "/" },
	},
	{
		path: "/",
		name: "/",
		redirect: { name: "index" },
		children: [
			// 刷新页面 必须保留
			{
				path: "refresh",
				name: "refresh",
				component: {
					beforeRouteEnter(to, from, next) {
						next((vm) => vm.$router.replace(from.fullPath));
					},
					render: (h) => h(),
				},
			},
			// 页面重定向 必须保留
			{
				path: "redirect/:route*",
				name: "redirect",
				component: {
					beforeRouteEnter(to, from, next) {
						next((vm) => vm.$router.replace(JSON.parse(from.params.route)));
					},
					render: (h) => h(),
				},
			},
		],
	},
	// 登录
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login"),
		meta: {
			hidden: true,
			icon: "",
			noCache: false,
			title: "登录",
			auth: false,
		},
	},
	{
		path: "/register",
		name: "register",
		component: () => import("@/views/Register"),
		meta: {
			hidden: true,
			icon: "",
			noCache: false,
			title: "注册",
			auth: false,
		},
	},
	{
		path: "/logout",
		name: "logout",
		redirect: { name: "login" },
		meta: {
			auth: true,
		},
	},
	{
		path: "/index",
		name: "index",
		redirect: { name: "flights" },
		component: () => import(/* webpackChunkName: "about" */ "@/views/layout/Index.vue"),
		children: [
			{
				path: "/flights",
				name: "flights",
				component: () => import(/* webpackChunkName: "about" */ "@/views/flights/Index.vue"),
			},
		],
	},
	{
		path: "*",
		name: "*",
		component: () => import(/* webpackChunkName: "about" */ "@/views/error/NotFound.vue"),
		meta: {
			icon: "",
			title: "404",
			auth: false,
			isDisable: true,
			isCache: false,
		},
	},
];

export default [...frameInSide, ...frameNoSide, ...frameOut];
