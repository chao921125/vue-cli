[更新日志 2021-03-10](VERSION.md)

建议使用 yarn install

# vue3-cli
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

# Project Features
1.国际化：vue-i18n/ant-design

2.路由架构

3.各种demo的使用

# 推荐及使用组件（基于js）
## 核心库
core-js

vue

vue-router

vuex

## 语法检查
eslint -D

eslint-plugin-prettier

## 节点和浏览器的BDD / TDD断言库
chai

## 样式组件 -D // 注意重写组件样式的引用
sass sass-loader node-sass

less less-loader style-resources-loader

## UI
element-plus // PC 官方

ant-design-vue // PC API实现看着不香，转element了

vant@next // 移动

## 进度条
nprogress

vue-simple-spinner

vue-loading-overlay

## 过渡动画
vue-page-transition

## 拖拽
vuedraggable

## 数据表格
xlsx

## html2canvas，页面截图
html2canvas

## http请求
axios

## cookie管理
js-cookie

## 加密解密
crypto-js

md5

bcryptjs

jsencrypt

jsrsasign

## ua签名
ua-parser-js

## 本地数据存储
lodash

lowdb

## 二维码
qrcode

qrcodejs2

vue-qr

## 日期格式化
moment

date-fns

## 国际化
vue-i18n

## 代码提交信息校验 -D
husky

commitizen

cz-conventional-changelog

cz-customizable


## 适配移动端
amfe-flexible // 按照比例缩放展示，基于不同设备（Android、iOS、brow）的px值

postcss // 将px转rem -D

postcss-loader

postcss-pxtorem

postcss-plugin-px2rem

postcss-px2rem

## 移动端调试
vconsole

# TODO
封装axios，前端自定义报文返回，error根据业务需求返回结果，含状态码。

echarts 更新5.0之后封装使用。

改变icon，改为动态加载模式。

# Question
sass-loader 10.1.1请勿升级
less-loader 7.3.0请勿升级
