const { defineConfig } = require("@vue/cli-service");
// 拼接路径
const resolve = (dir) => require("path").join(__dirname, dir);
// 增加环境变量
process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_BUILD_TIME = require("dayjs")().format("yyyy-MM-dd HH:mm:ss");

module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
	// 输出文件目录
	outputDir: "dist", // Default
	// 静态资源目录 (js, css, img, fonts)(相对于 outputDir)
	// assetsDir: 'static',
	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
	// indexPath: 'index.html',
	// 哈希
	// filenameHashing: true,
	// pages: {
	//   index: {
	//     // page 的入口
	//     entry: "src/index/main.js",
	//     // 模板来源
	//     template: "public/index.html",
	//     // 在 dist/index.html 的输出
	//     filename: "index.html",
	//     // 当使用 title 选项时，
	//     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	//     title: "Index Page",
	//     // 在这个页面中包含的块，默认情况下会包含
	//     // 提取出来的通用 chunk 和 vendor chunk。
	//     chunks: ["chunk-vendors", "chunk-common", "index"],
	//   },
	//   // 当使用只有入口的字符串格式时，
	//   // 模板会被推导为 `public/subpage.html`
	//   // 并且如果找不到的话，就回退到 `public/index.html`。
	//   // 输出文件名会被推导为 `subpage.html`。
	//   subpage: "src/subpage/main.js",
	// },
	// 在保存的时候检查 process.env.NODE_ENV !== 'production'
	lintOnSave: process.env.NODE_ENV !== "production", // Default
	// 运行时版本是否需要编译
	// runtimeCompiler: false,
	// 使用带有浏览器内编译器的完整构建版本
	// 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名 可以是字符串或正则表达式
	transpileDependencies: true,
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: process.env.NODE_ENV !== "production",
	// 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
	// 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响
	// crossorigin: "",
	// 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
	integrity: process.env.NODE_ENV === "production",
	configureWebpack: (config) => {
		// // 忽略打包文件
		config.externals = {
			// 'v-charts': 'VeIndex'
		};
	},
	// webpack配置
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	chainWebpack: (config) => {
		config.plugins.delete("prefetch").delete("preload");
		// 重新设置 alias .set('@', resolve('src'))
		config.resolve.alias.set("@", resolve("src"));
		// config.resolve.alias.set("@api", resolve("src/api"));
		// node
		config.node.set("__dirname", true).set("__filename", true);
		// set svg-sprite-loader
		config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();
		config.module
			.rule("icons")
			.test(/\.svg$/)
			.include.add(resolve("src/assets/icons"))
			.end()
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
				symbolId: "icon-[name]",
			})
			.end();
	},
	// css相关配置
	css: {
		// 去掉文件名中的 .module
		// modules: true,
		// requireModuleExtension: true,
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		// 开启 CSS source maps?
		sourceMap: process.env.NODE_ENV !== "production",
		// css预设器配置项
		loaderOptions: {
			css: {
				// 这里的选项会传递给 css-loader
			},
			postcss: {
				// 这里的选项会传递给 postcss-loader
			},
			// 设置 scss 公用变量文件
			sass: {
				additionalData: `@import "~@/assets/style/public.scss";`,
			},
		},
		// 启用 CSS modules for all css / pre-processor files.
		// modules: true
	},
	devServer: {
		client: {
			overlay: false,
			progress: true,
			reconnect: 60,
		},
		compress: true,
		https: false,
		host: "127.0.0.1",
		open: process.platform === "darwin",
		port: 2222,
		proxy: {
			// 可以根据不同的URL通过不同的URL代理请求
			"/api": {
				target: "http://0.0.0.0:9999",
				pathRewrite: {
					"^/api": "", // remove base path
				},
				ws: false,
				changeOrigin: true,
			},
			// '/other': {
			//   target: '<other_url>'
			// }
		},
		server: "http",
	},
	// use thread-loader for babel & TS in production build
	// enabled by default if the machine has more than 1 cores
	// 构建时开启多进程处理babel编译
	parallel: require("os").cpus().length > 1,
	// PWA 插件相关配置
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	// pwa: {},
	// 第三方插件配置
	pluginOptions: {
		// ...
	},
});
