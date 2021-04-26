```vue3的各种小demo集合```

[更新日志](VERSION.md)

建议使用 yarn install

# 目录结构
- ├── package.json 包管理
- ├── public
- │   ├── favicon.ico
- │   ├── img
- │   ├── index.html
- │   └── robots.txt
- ├── src
- │   ├── App.vue
- │   ├── api 接口定义
- │   ├── assets 静态资源
- │   ├── components 公共组件
- │   ├── libs 工具库
- │   ├── main.js 启动入口
- │   ├── mock 数据mock
- │   ├── plugins 组件工具
- │   ├── registerServiceWorker.js
- │   ├── router 路由
- │   ├── store vuex
- │   └── views 页面
- └── vue.config.js 启动配置

# 基础核心依赖
## 核心库 https://vue3js.cn/
[vue-cli](https://www.npmjs.com/package/@vue/cli)

?[vite](https://www.npmjs.com/package/vite)
[官网](https://cn.vitejs.dev/)
?

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

# UI相关 https://madewith.cn/
## UI 官方
[element-plus](https://www.npmjs.com/package/element-plus) // PC
[官网](https://element-plus.org/#/zh-CN)

[ant-design-vue](https://www.npmjs.com/package/ant-design-vue) // PC
[官网](https://2x.antdv.com/components/overview/)

[bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue) // ?
[官网](https://dev.bootstrap-vue.org/docs)

[vant@next](https://www.npmjs.com/package/vant) // M
[官网](https://vant-contrib.gitee.io/vant/v3/#/zh-CN)

## 其他三方库
[vxe-table](https://www.npmjs.com/package/vxe-table)
[官网(包含支持v3)](https://xuliangzhan_admin.gitee.io/vxe-table/#/table/start/install)

## 进度条
[nprogress](https://www.npmjs.com/package/nprogress)

[vue-simple-spinner](https://www.npmjs.com/package/vue-simple-spinner)

[vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay)

## 滑动条
[vue-slider-component](https://www.npmjs.com/package/vue-slider-component)

## 轮播图
[vue-concise-slider](https://www.npmjs.com/package/vue-concise-slider)

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

## 加密解密
[crypto-js](https://www.npmjs.com/package/crypto-js)

[md5](https://www.npmjs.com/package/md5)

[bcryptjs](https://www.npmjs.com/package/bcryptjs)

[jsencrypt](https://www.npmjs.com/package/jsencrypt)

[jsrsasign](https://www.npmjs.com/package/jsrsasign)

## ua签名
[ua-parser-js](https://www.npmjs.com/package/ua-parser-js)

## 文件保存
[file-saver](https://www.npmjs.com/package/file-saver)

## 本地数据存储
[lodash](https://www.npmjs.com/package/lodash)

[lowdb](https://www.npmjs.com/package/lowdb)

## 二维码
[qrcode](https://www.npmjs.com/package/qrcode)

[qrcodejs2](https://www.npmjs.com/package/qrcodejs2)

[vue-qr](https://www.npmjs.com/package/vue-qr)

## 日期格式化
[moment](https://www.npmjs.com/package/moment)

[date-fns](https://www.npmjs.com/package/date-fns)

[dayjs](https://www.npmjs.com/package/dayjs)

## 富文本编辑器
[tiptap](https://www.npmjs.com/package/tiptap)

[wangeditor](https://www.npmjs.com/package/wangeditor)

[vue-quill-editor](https://www.npmjs.com/package/vue-quill-editor)

[@ckeditor/ckeditor5-vue](https://www.npmjs.com/package/@ckeditor/ckeditor5-vue)
[@ckeditor/ckeditor5-vue](https://www.npmjs.com/package/@ckeditor/ckeditor5-vue)

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

## 地图
[vue-amap](https://www.npmjs.com/package/vue-amap) // 高德

[vue-baidu-map](https://www.npmjs.com/package/vue-baidu-map) // 百度

## 代码提交信息校验 -D
[husky](https://www.npmjs.com/package/husky)

[commitizen](https://www.npmjs.com/package/commitizen)

[cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)

[cz-customizable](https://www.npmjs.com/package/cz-customizable)

## 适配移动端 -D
[amfe-flexible](https://www.npmjs.com/package/vant) // 不再推荐 lib-flexible 按照比例缩放展示，基于不同设备（Android、iOS、brow）的px值

[postcss](https://www.npmjs.com/package/postcss)
[postcss-loader](https://www.npmjs.com/package/postcss-loader) // 将px转rem

[postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem)

[postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem)

[postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem)

## 移动端调试 -D
[vconsole](https://www.npmjs.com/package/vconsole)

# TODO
封装axios，前端自定义报文返回，error根据业务需求返回结果，含状态码。

改变icon，改为动态加载模式。

# Question
postcss-pxtorem 5.1.1请勿升级
sass-loader 10.1.1请勿升级
less-loader 7.3.0请勿升级

https://baijiahao.baidu.com/s?id=1629138670094636894&wfr=spider&for=pc