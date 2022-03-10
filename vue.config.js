const path = require("path");
// 拼接路径
const resolve = (dir) => path.join(__dirname, dir);
// 增加环境变量
process.env.VUE_APP_VERSION = require("./package.json").version;
// process.env.VUE_APP_BUILD_TIME = require("dayjs")().format(
//   "yyyy-MM-dd HH:mm:ss"
// );

const ENV_PRODUCTION = "production";

const IS_PROD = process.env.NODE_ENV === ENV_PRODUCTION;

// 1、在configureWebpack中忽略打包文件；2、在chainWebpack中配置cdn；3、在index.html中配置cdn；
/*
externals: {
  // "v-charts": "VeIndex"
},

config.plugin('html').tap((args) => {
  args[0].cdn = cdn;
  return args;
});

<% for (var i in htmlWebpackPlugin.options.cdn &&
    htmlWebpackPlugin.options.cdn.js) { %>
    <link
      href="<%= htmlWebpackPlugin.options.cdn.js[i] %>"
      rel="external nofollow"
      as="script"
    />
<% } %>

<% for (var i in htmlWebpackPlugin.options.cdn &&
    htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
<% } %>
*/
const cdnFile = {
  css: [],
  js: [
    "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"
  ]
};

module.exports = {
  publicPath: process.env.NODE_ENV === ENV_PRODUCTION ? "/" : "/",
  // 输出文件目录
  outputDir: "dist", // Default
  // 静态资源目录 (js, css, img, fonts)(相对于 outputDir)
  // assetsDir: "static",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  // indexPath: "index.html",
  // 哈希
  // filenameHashing: true,
  // pages: {
  //   index: {
  //      page 的入口
  //      entry: "src/index/main.js",
  //      模板来源
  //      template: "public/index.html",
  //      在 dist/index.html 的输出
  //      filename: "index.html",
  //      当使用 title 选项时，
  //      template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //      title: "Index Page",
  //      在这个页面中包含的块，默认情况下会包含
  //      提取出来的通用 chunk 和 vendor chunk。
  //      chunks: ["chunk-vendors", "chunk-common", "index"]
  //    },
  //    当使用只有入口的字符串格式时，
  //    模板会被推导为 `public/subpage.html`
  //    并且如果找不到的话，就回退到 `public/index.html`。
  //    输出文件名会被推导为 `subpage.html`。
  //    subpage: "src/subpage/main.js"
  // },
  // 在保存的时候检查 process.env.NODE_ENV !== "production" Type: boolean | "warning" | "default" | "error"
  lintOnSave: process.env.NODE_ENV !== ENV_PRODUCTION, // Default
  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  // compiler: false,
  // 运行时版本是否需要编译
  // runtimeCompiler: false,
  // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  // transpileDependencies: [
  // 可以是字符串或正则表达式
  // ],
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: process.env.NODE_ENV !== ENV_PRODUCTION,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响
  // crossorigin: "",
  // 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
  integrity: true,
  // css相关配置
  css: {
    // 只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
    requireModuleExtension: true,
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        // 6.0.0 以上才有此配置，不建议这这里添加样式，同时也不支持引入样式
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            // 直接覆盖变量
            // "text-color": "#f5222d",
            // "border-color": "#eee",
          },
        },
        // additionalData: `@import "~@/assets/styles/fixed/ant.less";`,
      },
      // 设置 scss 公用变量文件 css-loader postcss-loader sass-loader less-loader stylus-loader
      // sass-loader v8-，这个选项名是 "data"
      // sass-loader v8 中，这个选项名是 "prependData"
      // sass-loader v10+，这个选项名是 "additionalData"
      sass: {
        additionalData: `@import "~@/assets/styles/public.scss";`,
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    // modules: true
  },
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    name: "v3-app"
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  // 构建时开启多进程处理babel编译 仅作用于生产构建
  parallel: require("os").cpus().length > 1,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    clientLogLevel: "info",
    publicPath: process.env.NODE_ENV === ENV_PRODUCTION ? "/" : "/",
    open: {
      app: ["Google Chrome", "--incognito", "--other-flag"],
    },
    compress: true,
    disableHostCheck: true, //webpack4.0 开启热更新
    // host: "127.0.0.1",
    port: 8333,
    https: false,
    hotOnly: false,
    proxy: {
      // 可以根据不同的URL通过不同的URL代理请求
      "/api": {
        target: "http://192.168.1.8:9997",
        pathRewrite: {
          "^/api": "", // remove base path
        },
        ws: false, // 是否代理websockets
        changeOrigin: true, // 接口跨域
        secure: false, // 是否验证ssl
      },
      // "/other": {
      //   target: "<other_url>"
      // }
    }, // 设置代理
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", ".vue", "css", "scss", "less"],
    },
    // 忽略打包文件
    externals: {
      // "v-charts": "VeIndex"
    },
    // 忽略因为三方包依赖出现的错误
    module: {
      rules: [
        { test: /\.mov$/, use: 'file-loader' },
      ],
      unknownContextCritical: false
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch").delete("preload");
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve.symlinks(true);
    // 重新设置 alias .set("@", resolve("src"))
    config.resolve.alias
      .set("@", resolve("src"))
      // .set("@api", resolve("src/api"))
      // .set("@assets", resolve("src/assets"))
      // .set("@components", resolve("src/components"))
      // .set("@libs", resolve("src/libs"))
      // .set("@plugins", resolve("src/plugins"));
    // node
    config.node.set("__dirname", true).set("__filename", true);
    // const types = ["vue-modules", "vue", "normal-modules", "normal"];
    // types.forEach((type) => addStyleResource(config.module.rule("less").oneOf(type)));
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons"))
      .end()
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()
    config.optimization.minimizer("terser").tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
    // 发行或运行时启用了压缩时会生效
    config.optimization.minimizer("terser").tap((args) => {
      const compress = args[0].terserOptions.compress
      // 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
      compress.drop_console = true
      compress.pure_funcs = [
          "__f__", // App 平台 vue 移除日志代码
          // "console.debug" // 可移除指定的 console 方法
      ]
      return args
    })
  },
  // 第三方插件配置
  pluginOptions: {
    // "style-resources-loader": {
    //   preProcessor: "less",
    //   patterns: [path.resolve(__dirname, "~@/assets/styles/fixed/ant.less")],
    // },
  },
};

// function addStyleResource(rule) {
//   rule
//     .use("style-resource")
//     .loader("style-resources-loader")
//     .options({
//       // 需要引入的公共文件
//       patterns: [path.resolve(__dirname, "./src/assets/styles/fixed/ant.less")],
//     });
// }
