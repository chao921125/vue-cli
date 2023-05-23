# 本项目不在更新，请转移到[VUE3+VITE版本](https://github.com/chao921125/vue-vite)
# vue2 admin基础框架
[移动PC切换路由实现跳转不同页面及适配](./read/Mobile.md)
以及各种小demo集合 \
建议使用 yarn install (不建议大家使用淘宝的镜像源，有丢包问题) \
部分解释性.md文件已经迁移到了read目录中去 \
若果更新失败可以永久设置镜像仓库或者临时使用淘宝镜像仓库：--registry https://registry.npm.taobao.org \
为了加快网站渲染速度，请尽可能使用cdn加速，不要把包都打进去


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
