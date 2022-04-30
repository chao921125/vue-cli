# vue3 admin基础框架
[体验地址](https://www.ixunta.online/) \
[更新日志，写了个寂寞](./read/VERSION.md) \
[移动PC切换路由实现跳转不同页面及适配](./read/Mobile.md)
以及各种小demo集合 \
建议使用 yarn install (不建议大家使用淘宝的镜像源，有丢包问题) \
部分解释性.md文件已经迁移到了read目录中去 \
若果更新失败可以永久设置镜像仓库或者临时使用淘宝镜像仓库：--registry https://registry.npm.taobao.org \
为了加快网站渲染速度，请尽可能使用cdn加速，不要把包都打进去

## [VUE 各类插件集合](https://github.com/chao921125/web-static/blob/main/Document/VUE.MD)

**_佛系更新_**

# 项目注意事项
定版更新请勿升级 \
~~postcss-pxtorem 5.1.1~~（已经废弃的移动端兼容方案） \
node-sass 6.0.1 \
sass-loader 10.2.0 \
less-loader 7.3.0 \
webpack 4.46.0 \
screenfull 5.2.0 (6.0.0有问题请勿升级) \
目前需要手动升级的包： \
vue [点击查看](https://www.npmjs.com/package/vue) \
vue-i18n [点击查看](https://www.npmjs.com/package/vue-i18n) \
vue-router [点击查看](https://www.npmjs.com/package/vue-router) \
vuex [点击查看](https://www.npmjs.com/package/vuex) \
vant [点击查看](https://www.npmjs.com/package/vant) \
_ant-design-vue (不推荐使用)_ [点击查看](https://www.npmjs.com/package/ant-design-vue) \
@vue/test-utils [点击查看](https://www.npmjs.com/package/@vue/test-utils)

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
