# desc about key important


## scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行npm run start时，所要执行的命令。
```
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}
```

## dependencies字段指定了项目运行所依赖的模块，devDependencies指定项目开发所需要的模块。

```
"devDependencies": {
    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1"
}

指定版本：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
波浪号（tilde）+指定版本：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
latest：安装最新版本。
```

## peerDependencies字段，就是用来供插件指定其所需要的主工具的版本。

```
"peerDependencies": {
    "chai": "1.x"
}
```

## bin项用来指定各个内部命令对应的可执行文件的位置。

```
"bin": {
  "someTool": "./bin/someTool.js"
}

scripts: {
  start: './node_modules/bin/someTool.js build'
}

// 简写为

scripts: {
  start: 'someTool build'
}
```

## main字段指定了加载的入口文件，require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js。

## config字段用于添加命令行的环境变量。

## browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。

```
"browser": {
  "tipso": "./node_modules/tipso/src/tipso.js"
}
```

## engines字段指明了该模块运行的平台，比如 Node 的某个版本或者浏览器。

```
{ "engines" : { "node" : ">=0.10.3 <0.12" } }

{ "engines" : { "npm" : "~1.0.20" } }

```
## man用来指定当前模块的man文档的位置。

```
"man" :[ "./doc/calc.1" ]
```

## preferGlobal的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。


## style指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。

```
"style": [
  "./node_modules/tipso/src/tipso.css"
]
```
{
  "name": "vue-fixed-router",
  "version": "0.1.0",
  "private": true,
  "description": "description",
  "author": "author",
  "scripts": {
    "dev": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint",
    "format": "prettier --write 'src/**/*.js' 'src/**/*.vue'",
    "precommit": "lint-staged"
  },
  "dependencies": {
    "@babel/runtime": "^7.10.2",
    "axios": "^0.19.2",
    "dayjs": "^1.8.28",
    "core-js": "^3.6.5",
    "echarts": "^4.8.0",
    "element-ui": "^2.13.2",
    "file-saver": "^2.0.2",
    "js-cookie": "^2.2.1",
    "lowdb": "^1.0.0",
    "nprogress": "^0.2.0",
    "qs": "^6.9.4",
    "register-service-worker": "^1.7.1",
    "screenfull": "^5.0.2",
    "ua-parser-js": "^0.7.21",
    "vue": "^2.6.11",
    "vue-class-component": "^7.2.3",
    "vue-property-decorator": "^8.5.0",
    "vue-router": "^3.3.4",
    "vuedraggable": "^2.23.2",
    "vuex": "^3.4.0",
    "xlsx": "^0.16.2"
  },
  "devDependencies": {
    "@babel/plugin-transform-runtime": "^7.10.1",
    "@vue/cli-plugin-babel": "^4.4.4",
    "@vue/cli-plugin-e2e-cypress": "^4.4.4",
    "@vue/cli-plugin-eslint": "^4.4.4",
    "@vue/cli-plugin-pwa": "^4.4.4",
    "@vue/cli-plugin-router": "^4.4.4",
    "@vue/cli-plugin-unit-jest": "^4.4.4",
    "@vue/cli-plugin-unit-mocha": "^4.4.4",
    "@vue/cli-plugin-vuex": "^4.4.4",
    "@vue/cli-service": "^4.4.4",
    "@vue/eslint-config-prettier": "^6.0.0",
    "@vue/test-utils": "1.0.3",
    "babel-eslint": "^10.1.0",
    "chai": "^4.2.0",
    "css-loader": "^3.6.0",
    "eslint": "^7.2.0",
    "eslint-config-prettier": "^6.11.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-vue": "^6.2.2",
    "file-loader": "^6.0.0",
    "node-sass": "^4.14.1",
    "postcss-loader": "^3.0.0",
    "prettier": "^2.0.5",
    "prettier-eslint": "^11.0.0",
    "prettier-eslint-cli": "^5.0.0",
    "sass-loader": "^8.0.2",
    "sass-resources-loader": "^2.0.3",
    "style-loader": "^1.2.1",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.11"
  }
}
