# 修改为非admin端操作
```
package.json: mockjs（可以删除）
mock（可以删除）
APP.vue: 需要修改判断设备
main.js: process.env.VUE_APP_MOCK（对应整块代码，删除或者注释掉）
router: index.js、routes.js（请使用web文件，需要将一些权限校验去掉，直接将路由写死即可）
```