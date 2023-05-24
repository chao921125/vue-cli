const path = require('path'); module.exports = { // 基本路径 publicPath: process.env.NODE_ENV === 'production' ? '' : '/', // 输出文件目录 outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist', // eslint-loader 是否在保存的时候检查 lintOnSave: true, /\*\*

- webpack 配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md **/ chainWebpack: (config) => { const types = ['vue-modules', 'vue', 'normal-modules', 'normal'] types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type))) }, configureWebpack: (config) => { config.resolve = { // 配置解析别名 extensions: ['.js', '.json', '.vue'], alias: { '@': path.resolve(**dirname, './src'), 'public': path.resolve(**dirname, './public'), 'components': path.resolve(**dirname, './src/components'), 'common': path.resolve(**dirname, './src/common'), 'api': path.resolve(**dirname, './src/api'), 'views': path.resolve(**dirname, './src/views'), 'data': path.resolve(\_\_dirname, './src/data') } } }, // 生产环境是否生成 sourceMap 文件 productionSourceMap: false, // css 相关配置 css: { // 是否使用 css 分离插件 ExtractTextPlugin extract: true, // 开启 CSS source maps? sourceMap: false, // css 预设器配置项 loaderOptions: {}, // 启用 CSS modules for all css / pre-processor files. modules: false }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores parallel: require('os').cpus().length > 1, /**
- PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa \*/ pwa: {}, // webpack-dev-server 相关配置 devServer: { open: false, // 编译完成是否打开网页 host: '0.0.0.0', // 指定使用地址，默认 localhost,0.0.0.0 代表可以被外界访问 port: 8080, // 访问端口 https: false, // 编译失败时刷新页面 hot: true, // 开启热加载 hotOnly: false, proxy: null, // 设置代理 overlay: { // 全屏模式下是否显示脚本错误 warnings: true, errors: true }, before: app => { } }, /\*\*
- 第三方插件配置 \*/ pluginOptions: {} }

// 全局导入样式 function addStyleResource(rule) { rule.use('style-resource') .loader('style-resources-loader') .options({ patterns: [ path.resolve(__dirname, './src/common/less/index.less'), ], }) }

// 不再建议使用全局挂载单独的变量 app.config.globalProperties.$global = global;
setup() {
     const { ctx } = getCurrentInstance();
     const showMessage = () => {
        ctx.$message.success("this is message"); }; return { showMessage }; }

//APP.vue //在 app.vue 内注册 import { provide ,ref ,readonly} from "vue"; setup() { //用 ref 包裹可使 location 变为响应式 let location=ref('location') const updataLocation=()=>{ location.value='变身后的大 Location' } /\*readonly 包裹后可以在组件内引用时不被改变值。 否则在组件内可以直接通过 location.value=_\*\*将值改变， 包裹后只能通过 updataLocation()方法改变_/ provide('location',readonly(location)) provide('updataLocation',updataLocation) }

//组件内使用 import { inject} from "vue"; setup(){ const userLocation = inject('location') const updataLocation = inject('updataLocation') return{ userLocation,updataLocation } }

"no-alert": 0,//禁止使用 alert confirm prompt "no-array-constructor": 2,//禁止使用数组构造器 "no-bitwise": 0,//禁止使用按位运算符 "no-caller": 1,//禁止使用 arguments.caller 或 arguments.callee "no-catch-shadow": 2,//禁止 catch 子句参数与外部作用域变量同名 "no-class-assign": 2,//禁止给类赋值 "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句 "no-console": 2,//禁止使用 console "no-const-assign": 2,//禁止修改 const 声明的变量 "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1) "no-continue": 0,//禁止使用 continue "no-control-regex": 2,//禁止在正则表达式中使用控制字符 "no-debugger": 2,//禁止使用 debugger "no-delete-var": 2,//不能对 var 声明的变量使用 delete 操作符 "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/ "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1} "no-dupe-args": 2,//函数参数不能重复 "no-duplicate-case": 2,//switch 中的 case 标签不能重复 "no-else-return": 2,//如果 if 语句里面有 return,后面不能跟 else 语句 "no-empty": 2,//块语句中的内容不能为空 "no-empty-character-class": 2,//正则表达式中的[]内容不能为空 "no-empty-label": 2,//禁止使用空 label "no-eq-null": 2,//禁止对 null 使用==或!=运算符 "no-eval": 1,//禁止使用 eval "no-ex-assign": 2,//禁止给 catch 语句中的异常参数赋值 "no-extend-native": 2,//禁止扩展 native 对象 "no-extra-bind": 2,//禁止不必要的函数绑定 "no-extra-boolean-cast": 2,//禁止不必要的 bool 转换 "no-extra-parens": 2,//禁止非必要的括号 "no-extra-semi": 2,//禁止多余的冒号 "no-fallthrough": 1,//禁止 switch 穿透 "no-floating-decimal": 2,//禁止省略浮点数中的 0 .5 3. "no-func-assign": 2,//禁止重复的函数声明 "no-implicit-coercion": 1,//禁止隐式转换 "no-implied-eval": 2,//禁止使用隐式 eval "no-inline-comments": 0,//禁止行内备注 "no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数） "no-invalid-regexp": 2,//禁止无效的正则表达式 "no-invalid-this": 2,//禁止无效的 this，只能用在构造器，类，对象字面量 "no-irregular-whitespace": 2,//不能有不规则的空格 "no-iterator": 2,//禁止使用**iterator** 属性 "no-label-var": 2,//label 名不能与 var 声明的变量名相同 "no-labels": 2,//禁止标签声明 "no-lone-blocks": 2,//禁止不必要的嵌套块 "no-lonely-if": 2,//禁止 else 语句内只有 if 语句 "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以） "no-mixed-requires": [0, false],//声明时不能混用声明类型 "no-mixed-spaces-and-tabs": [2, false],//禁止混用 tab 和空格 "linebreak-style": [0, "windows"],//换行风格 "no-multi-spaces": 1,//不能用多余的空格 "no-multi-str": 2,//字符串不能用\换行 "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过 2 行 "no-native-reassign": 2,//不能重写 native 对象 "no-negated-in-lhs": 2,//in 操作符的左边不能有! "no-nested-ternary": 0,//禁止使用嵌套的三目运算 "no-new": 1,//禁止在使用 new 构造一个实例后不赋值 "no-new-func": 1,//禁止使用 new Function "no-new-object": 2,//禁止使用 new Object() "no-new-require": 2,//禁止使用 new require "no-new-wrappers": 2,//禁止使用 new 创建包装实例，new String new Boolean new Number "no-obj-calls": 2,//不能调用内置的全局对象，比如 Math() JSON() "no-octal": 2,//禁止使用八进制数字 "no-octal-escape": 2,//禁止使用八进制转义序列 "no-param-reassign": 2,//禁止给参数重新赋值 "no-path-concat": 0,//node 中不能使用**dirname 或**filename 做路径拼接 "no-plusplus": 0,//禁止使用++，-- "no-process-env": 0,//禁止使用 process.env "no-process-exit": 0,//禁止使用 process.exit() "no-proto": 2,//禁止使用**proto**属性 "no-redeclare": 2,//禁止重复声明变量 "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/ "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错 "no-return-assign": 1,//return 语句中不能有赋值表达式 "no-script-url": 0,//禁止使用 javascript:void(0) "no-self-compare": 2,//不能比较自身 "no-sequences": 0,//禁止使用逗号运算符 "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名 "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用 "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格 "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2] "no-sync": 0,//nodejs 禁止同步方法 "no-ternary": 0,//禁止使用三目运算符 "no-trailing-spaces": 1,//一行结束后面不要有空格 "no-this-before-super": 0,//在调用 super()之前不能使用 this 或 super "no-throw-literal": 2,//禁止抛出字面量错误 throw "error"; "no-undef": 1,//不能有未定义的变量 "no-undef-init": 2,//变量初始化时不能直接给它赋值为 undefined "no-undefined": 2,//不能使用 undefined "no-unexpected-multiline": 2,//避免多行表达式 "no-underscore-dangle": 1,//标识符不能以\_开头或结尾 "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false; "no-unreachable": 2,//不能有无法执行的代码 "no-unused-expressions": 2,//禁止无用的表达式 "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数 "no-use-before-define": 2,//未定义前不能使用 "no-useless-call": 2,//禁止不必要的 call 和 apply "no-void": 2,//禁用 void 操作符 "no-var": 0,//禁用 var，用 let 和 const 代替 "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注 "no-with": 2,//禁用 with "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格 "arrow-parens": 0,//箭头函数用小括号括起来 "arrow-spacing": 0,//=>的前/后括号 "accessor-pairs": 0,//在对象中使用 getter/setter "block-scoped-var": 0,//块语句中使用 var "brace-style": [1, "1tbs"],//大括号风格 "callback-return": 1,//避免多次调用回调什么的 "camelcase": 2,//强制驼峰法命名 "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号 "comma-spacing": 0,//逗号前后的空格 "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾 "complexity": [0, 11],//循环复杂度 "computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的 "consistent-return": 0,//return 后面是否允许省略 "consistent-this": [2, "that"],//this 别名 "constructor-super": 0,//非派生类不能调用 super，派生类必须调用 super "curly": [2, "all"],//必须使用 if(){} 中的{} "default-case": 2,//switch 语句最后必须有 default "dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾 "dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号 "eol-last": 0,//文件以单一的换行符结束 "eqeqeq": 2,//必须使用全等 "func-names": 0,//函数表达式必须有名字 "func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式 "generator-star-spacing": 0,//生成器函数\*的前后空格 "guard-for-in": 0,//for in 循环要用 if 语句过滤 "handle-callback-err": 0,//nodejs 处理错误 "id-length": 0,//变量名长度 "indent": [2, 4],//缩进风格 "init-declarations": 0,//声明时必须赋初值 "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格 "lines-around-comment": 0,//行前/行后备注 "max-depth": [0, 4],//嵌套块深度 "max-len": [0, 80, 4],//字符串最大长度 "max-nested-callbacks": [0, 2],//回调嵌套深度 "max-params": [0, 3],//函数最多只能有 3 个参数 "max-statements": [0, 10],//函数内最多有几个声明 "new-cap": 2,//函数名首行大写必须使用 new 方式调用，首行小写必须用不带 new 方式调用 "new-parens": 2,//new 时必须加小括号 "newline-after-var": 2,//变量声明后是否需要空一行 "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格 "object-shorthand": 0,//强制对象字面量缩写语法 "one-var": 1,//连续声明 "operator-assignment": [0, "always"],//赋值运算符 += -=什么的 "operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首 "padded-blocks": 0,//块语句内行首行尾是否要空行 "prefer-const": 0,//首选 const "prefer-spread": 0,//首选展开运算 "prefer-reflect": 0,//首选 Reflect 的方法 "quotes": [1, "single"],//引号类型 `` "" '' "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号 "radix": 2,//parseInt 必须指定第二个参数 "id-match": 0,//命名检测 "require-yield": 0,//生成器函数必须有 yield "semi": [2, "always"],//语句强制分号结尾 "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格 "sort-vars": 0,//变量声明时排序 "space-after-keywords": [0, "always"],//关键字后面是否要空一格 "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格 "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格 "space-in-parens": [0, "never"],//小括号里面要不要有空格 "space-infix-ops": 0,//中缀操作符周围要不要有空格 "space-return-throw-case": 2,//return throw case 后面要不要加空格 "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格 "spaced-comment": 0,//注释风格要不要有空格什么的 "strict": 2,//使用严格模式 "use-isnan": 2,//禁止比较时使用 NaN，只能用 isNaN() "valid-jsdoc": 0,//jsdoc 规则 "valid-typeof": 2,//必须使用合法的 typeof 的值 "vars-on-top": 2,//var 必须放在作用域顶部 "wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格 "wrap-regex": 0,//正则表达式字面量用小括号包起来 "yoda": [2, "never"]//禁止尤达条件

TODO:eslint 支持 v3 的配置解决方案 https://babeljs.io/blog/2020/07/13/the-state-of-babel-eslint

vue3 中：根元素 直接迭代 100 个 报错问题。

// 代码压缩 const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// gzip 压缩 const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 是否为生产环境 const isProduction = process.env.NODE_ENV !== 'development'

// 本地环境是否需要使用 cdn const devNeedCdn = true

// cdn 链接 const cdn = { // cdn：模块名称和模块作用域命名（对应 window 里面挂载的变量名称） externals: { vue: 'Vue', vuex: 'Vuex', 'vue-router': 'VueRouter' }, // cdn 的 css 链接 css: [], // cdn 的 js 链接 js: [ 'https://cdn.staticfile.org/vue/2.6.10/vue.min.js', 'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js', 'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js' ] }

module.exports = { productionSourceMap: false, chainWebpack: config => { // ============压缩图片 start============ config.module .rule('images') .use('image-webpack-loader') .loader('image-webpack-loader') .options({ bypassOnDebug: true }) .end() // ============压缩图片 end============

        // ============注入cdn start============
        config.plugin('html').tap(args => {
            // 生产环境或本地需要cdn时，才注入cdn
            if (isProduction || devNeedCdn) args[0].cdn = cdn
            return args
        })
        // ============注入cdn start============
    },
    configureWebpack: config => {
        // 用cdn方式引入，则构建时要忽略相关资源
        if (isProduction || devNeedCdn) config.externals = cdn.externals

        // 生产环境相关配置
        if (isProduction) {
            // 代码压缩
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        //生产环境自动删除console
                        compress: {
                            warnings: false, // 若打包错误，则注释这行
                            drop_debugger: true,
                            drop_console: true,
                            pure_funcs: ['console.log']
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            )

            // gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )

            // 公共代码抽离
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            chunks: 'all',
                            test: /node_modules/,
                            name: 'vendor',
                            minChunks: 1,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 100
                        },
                        common: {
                            chunks: 'all',
                            test: /[\\/]src[\\/]js[\\/]/,
                            name: 'common',
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 60
                        },
                        styles: {
                            name: 'styles',
                            test: /\.(sa|sc|c)ss$/,
                            chunks: 'all',
                            enforce: true
                        },
                        runtimeChunk: {
                            name: 'manifest'
                        }
                    }
                }
            }
        }
    }

}
