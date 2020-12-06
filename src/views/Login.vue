<template>
  <div>Login</div>
  <a-button @click="login">login</a-button>
</template>

<script>
import storage from "@libs/storage";
export default {
  name: "Login",
  methods: {
    login() {
      // 伪代码，模拟动态加载路由，将其转为以下格式
      // 菜单JSON
      // 路由JSON，所有的都处理成一级路由
      let demoMenuList = [
        {
          key: "index",
          title: "首页",
          disabled: false,
          path: "/index",
          folder: "",
          icon: "index",
          auth: true,
        },
        {
          key: "demo",
          title: "样例",
          disabled: false,
          path: "/demo",
          folder: "",
          icon: "demo",
          auth: false,
        },
        {
          key: "table", // 对应路由name
          title: "表格", // 页面展示的title
          disabled: true, // 无需转化路由，只针对菜单有效
          path: "/table", // 菜单点击后直接请求路由
          folder: "demo", // 对应的文件夹
          icon: "table", // 菜单对应的icon
          auth: true, // 是否需要权限访问，路由控制
          children: [
            {
              key: "table-details",
              title: "测试添加路由",
              disabled: false,
              path: "/table/table-details",
              folder: "demo",
              icon: "test",
              auth: true,
            },
          ],
        },
      ];
      let routerList = [];
      routerList = this.req2Router(routerList, demoMenuList);
      storage.setSessionItem("menuList", demoMenuList);
      storage.setSessionItem("routerList", routerList);
      this.$router.push({ path: "/home" });
    },
    req2Router(routerList, dms) {
      for (let dm of dms) {
        routerList.push(this.item2Router(dm));
        if (dm.children) {
          this.req2Router(routerList, dm.children);
        }
      }
      return routerList;
    },
    item2Router(data) {
      let viewName = "";
      for (let str of data.key.split("-")) {
        str = str.replace(str[0], str[0].toUpperCase());
        viewName = str;
      }
      viewName = data.folder ? "/" + viewName : viewName;
      return {
        path: data.path, // 访问路径
        name: data.key, // 唯一名字
        component: () => import("@/views/" + data.folder + viewName), // 对应文件路径
        meta: {
          title: data.title, // 展现标题
          icon: data.icon, // 对应图标
          auth: data.auth, // 是否需要权限
        },
      };
    },
  },
};
</script>

<style scoped></style>
