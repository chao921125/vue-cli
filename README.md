```vue3的各种小demo集合，等待我的更改哒```

[更新日志](VERSION.md)

建议使用 yarn install

# 目录结构
```
┌─package.json 包管理
├─public
│  ├─favicon.ico
│  ├─img
│  ├─index.html
│  └─robots.txt 反爬虫
├─src
│  ├─App.vue
│  ├─api 接口定义
│  ├─assets 静态资源
│  ├─components 公共组件
│  ├─libs 工具库
│  ├─main.js 启动入口
│  ├─mock 数据mock
│  ├─plugins 组件工具
│  ├─registerServiceWorker.js
│  ├─router 路由
│  ├─store vuex
│  └─views 页面
└─vue.config.js 启动配置
```

# 基础核心依赖
## 核心库 https://vue3js.cn/
[vue-cli](https://www.npmjs.com/package/@vue/cli)

?[vite](https://www.npmjs.com/package/vite)
[官网](https://cn.vitejs.dev/)?

[vue](https://www.npmjs.com/package/vue)
[官网](https://vue3js.cn/docs/)

[vue-router](https://www.npmjs.com/package/vue-router)
[官网](https://vue3js.cn/)

[vuex](https://www.npmjs.com/package/vuex)
[官网](https://next.vuex.vuejs.org/)

[core-js](https://www.npmjs.com/package/core-js)

## http请求
[axios](https://www.npmjs.com/package/axios)
[官网](http://axios-js.com/)

[qs](https://www.npmjs.com/package/qs)

# 解析相关
## 样式组件 -D // 注意重写组件样式的引用
[sass<=>坑逼一个，小心慎用](https://www.npmjs.com/package/sass)
[sass-loader](https://www.npmjs.com/package/sass-loader)
[node-sass](https://www.npmjs.com/package/node-sass)

[less](https://www.npmjs.com/package/less)
[less-loader](https://www.npmjs.com/package/less-loader)
[style-resources-loader](https://www.npmjs.com/package/style-resources-loader)

[svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader)
[text-loader](https://www.npmjs.com/package/text-loader)
[vue-style-loader](https://www.npmjs.com/package/vue-style-loader)
[vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)

## 语法检查 -D
[eslint](https://www.npmjs.com/package/eslint)
[prettier](https://www.npmjs.com/package/prettier)

[eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

## 节点和浏览器的BDD / TDD断言库
[chai](https://www.npmjs.com/package/chai)
[cross-env](https://www.npmjs.com/package/cross-env)

# UI相关 https://madewith.cn/
## UI 官方
[elementUI](https://www.npmjs.com/package/element-ui) // V2 PC
[官网](https://element.eleme.io/)

[element-plus](https://www.npmjs.com/package/element-plus) // PC
[官网](https://element-plus.org/)

[ant-design-vue](https://www.npmjs.com/package/ant-design-vue) // PC
[官网](https://2x.antdv.com/components/overview/)

[bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue) // ?
[官网](https://dev.bootstrap-vue.org/docs/)

[vant@next](https://www.npmjs.com/package/vant) // M
[官网](https://vant-contrib.gitee.io/vant/v3/)

[mui](https://www.npmjs.com/package/mui) // M
[官网](https://dev.dcloud.net.cn/mui/)

[mint-ui](https://www.npmjs.com/package/mint-ui) // M
[官网](http://mint-ui.github.io/)

[vuetifyjs](https://www.npmjs.com/package/vuetify) // PC
[官网](https://vuetifyjs.com/)

[iviewui](https://www.npmjs.com/package/ant-design-vue) // ？PC
[官网](https://www.iviewui.com/)

## 其他三方库
[vxe-table](https://www.npmjs.com/package/vxe-table)
[官网(包含支持v3)](https://xuliangzhan_admin.gitee.io/vxe-table/#/table/start/install)

[vue-grid-layout](https://www.npmjs.com/package/vue-grid-layout)

## 加载
[nprogress](https://www.npmjs.com/package/nprogress)

[vue-simple-spinner](https://www.npmjs.com/package/vue-simple-spinner)

[vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay)

[vue-progressbar](https://www.npmjs.com/package/vue-progressbar)

[vue-spinner](https://www.npmjs.com/package/vue-spinner)

[vue-blockui](https://www.npmjs.com/package/vue-blockui)

## 进度条-滑动条
[vuejs-progress-bar](https://www.npmjs.com/package/vuejs-progress-bar)

[vue-slider-component](https://www.npmjs.com/package/vue-slider-component)

[vue-radial-progress](https://www.npmjs.com/package/vue-radial-progress)

## 轮播图
[vue-concise-slider](https://www.npmjs.com/package/vue-concise-slider)

[@splidejs/vue-splide](https://www.npmjs.com/package/@splidejs/vue-splide)

## 树
[vue-treeselect](https://www.npmjs.com/package/ue-treeselect)

## 过渡动画
[vue-page-transition](https://www.npmjs.com/package/vue-page-transition)

## 拖拽
[vuedraggable](https://www.npmjs.com/package/vuedraggable)
[vue-grid-layout](https://www.npmjs.com/package/vue-grid-layout)

## 全屏
[screenfull](https://www.npmjs.com/package/screenfull)

## 数据表格
[xlsx](https://www.npmjs.com/package/xlsx)

## html2canvas，页面截图
[html2canvas](https://www.npmjs.com/package/html2canvas)

## cookie管理
[js-cookie](https://www.npmjs.com/package/js-cookie)

## 文件保存
[file-saver](https://www.npmjs.com/package/file-saver)

## 二维码
[qrcode](https://www.npmjs.com/package/qrcode)

[qrcodejs2](https://www.npmjs.com/package/qrcodejs2)

[vue-qr](https://www.npmjs.com/package/vue-qr)

## 日期格式化
[moment](https://www.npmjs.com/package/moment)

[date-fns](https://www.npmjs.com/package/date-fns)

[dayjs](https://www.npmjs.com/package/dayjs)

## 日历
[vue-functional-calendar](https://www.npmjs.com/package/vue-functional-calendar)

[vuejs-heatmap](https://www.npmjs.com/package/vuejs-heatmap)

## 富文本编辑器
[tiptap](https://www.npmjs.com/package/tiptap)

[wangeditor](https://www.npmjs.com/package/wangeditor)
[官网](https://www.wangeditor.com/)

[vue-quill-editor](https://www.npmjs.com/package/vue-quill-editor)

[ckeditor5-vue](https://www.npmjs.com/package/@ckeditor/ckeditor5-vue)

## 剪切板
[vue-clipboard2](https://www.npmjs.com/package/vue-clipboard2)

# 数据操作
## 加密解密
[crypto-js](https://www.npmjs.com/package/crypto-js)

[md5](https://www.npmjs.com/package/md5)

[bcryptjs](https://www.npmjs.com/package/bcryptjs)

[jsencrypt](https://www.npmjs.com/package/jsencrypt)

[jsrsasign](https://www.npmjs.com/package/jsrsasign)

[base64-js](https://www.npmjs.com/package/base64-js)

[js-base64](https://www.npmjs.com/package/js-base64)

## ua签名
[ua-parser-js](https://www.npmjs.com/package/ua-parser-js)

## 本地数据存储
[lodash](https://www.npmjs.com/package/lodash)

[lowdb](https://www.npmjs.com/package/lowdb)

## 国际化
[vue-i18n](https://www.npmjs.com/package/vue-i18n)

## 复制粘贴
[clipboard](https://www.npmjs.com/package/clipboard)

## 三方授权登录集成库
[next-auth](https://www.npmjs.com/package/next-auth)

[@okta/okta-auth-js](https://www.npmjs.com/package/@okta/okta-auth-js)

[hellojs](https://www.npmjs.com/package/hellojs)

## 分享插件
[vue-social-sharing](https://www.npmjs.com/package/vue-social-sharing)

[vue-socialmedia-share](https://www.npmjs.com/package/vue-socialmedia-share)

[@vue/shared](https://www.npmjs.com/package/@vue/shared)

[@vue/cli-shared-utils](https://www.npmjs.com/package/@vue/cli-shared-utils)

[nativeshare](https://www.npmjs.com/package/nativeshare) // 唤起浏览器自身分享组件

## 地图
[vue-amap](https://www.npmjs.com/package/vue-amap) // 高德

[vue-baidu-map](https://www.npmjs.com/package/vue-baidu-map) // 百度

## 绘图 3D
[three.js](https://www.npmjs.com/package/three) // three.js


## 代码提交信息校验 -D
[husky](https://www.npmjs.com/package/husky)

[commitizen](https://www.npmjs.com/package/commitizen)

[cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)

[cz-customizable](https://www.npmjs.com/package/cz-customizable)

## 适配移动端 -D
[amfe-flexible](https://www.npmjs.com/package/amfe-flexible) // 不再推荐 lib-flexible 按照比例缩放展示，基于不同设备（Android、iOS、brow）的px值

[autoprefixer](https://www.npmjs.com/package/autoprefixer)

[postcss](https://www.npmjs.com/package/postcss)
[postcss-loader](https://www.npmjs.com/package/postcss-loader) // 将px转rem

[postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem)

[postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem)

[postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem)

## 移动端调试 -D
[vconsole](https://www.npmjs.com/package/vconsole)

## 支付
[stripejs](https://www.npmjs.com/package/stripe)
[官网](https://stripe.com/docs)

[vue-stripe-elements-plus](https://www.npmjs.com/package/vue-stripe-elements-plus)
[官网](https://vuestripe.com/)

[vue-stripe](https://www.npmjs.com/package/@vue-stripe/vue-stripe)
[官网](https://vuestripe.com/)

## 视频播放
[vue-video-player](https://www.npmjs.com/package/vue-video-player)

[vue-core-video-player](https://www.npmjs.com/package/vue-core-video-player)

## 游戏
[Eva.js](https://www.npmjs.com/package/@eva/eva.js)
[Eva-plugin-renderer](https://www.npmjs.com/package/@eva/plugin-renderer)
[Eva-plugin-renderer-img](https://www.npmjs.com/package/@eva/plugin-renderer-img)
[官网](https://eva-engine.gitee.io/#/tutorials/intro)

## 3D
[WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API) \
[threejs](https://www.npmjs.com/package/three)
[官网](https://threejs.org/)

# 特效
## 文字
[vue-textra](https://www.npmjs.com/package/vue-textra)

## 展示异常
[vue-show](https://www.npmjs.com/package/vue-show)

## 移动端日志
[eruda](https://www.npmjs.com/package/eruda)
[vconsole](https://www.npmjs.com/package/vconsole)


# TODO
封装axios，前端自定义报文返回，error根据业务需求返回结果，含状态码。\
改变icon，改为动态加载模式。

# Question
postcss-pxtorem 5.1.1请勿升级\
sass-loader 10.2.0请勿升级\
less-loader 7.3.0请勿升级\
目前需要手动升级的包：
vue、vue-i18n、vue-router、vuex、ant-design-vue、@vue/test-utils

# 其他组件参考
[组件](https://madewith.cn/) \
[百度](https://baijiahao.baidu.com/s?id=1629138670094636894&wfr=spider&for=pc)

# 好玩的？
[水墨文档](https://github.com/huangwei9527/Ink-wash-docs) \
[聊天](https://www.npmjs.com/package/vue-beautiful-chat)

# 转战游戏？来和我一起开荒啊！
## HTML？前端走一波

[createjs](https://www.createjs.com/) \

[Phaser 还有人用吗？](https://www.phaser-china.com/) \

## 专业开发200年
[Unity 3D(C/JS) 想要做多元化平台？这个没跑了！](https://www.unrealengine.com/zh-CN/) \

[Cocos(C/TS) 想要做多元化平台？这个没跑了！](https://www.unrealengine.com/zh-CN/) \

[Unreal(C++) 这是一个追求画质的游戏引擎](https://www.unrealengine.com/zh-CN/) \
