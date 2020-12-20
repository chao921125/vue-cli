import Mock from "mockjs";
import baseURL from "@/api/index";

Mock.setup({
  timeout: "200-600",
});

export const random = () => {
  return Math.floor(Math.random() * 10000000);
};

Mock.mock(baseURL.login, "post", () => {
  return { token: random(), uuid: random() };
});

Mock.mock(baseURL.logout, "post", () => {
  return { token: random(), uuid: random() };
});
Mock.mock(baseURL.getUserInfo, "post", () => {
  const menus = [
    {
      id: 1,
      orderNum: 1,
      type: 0,
      name: "首页",
      title: "首页",
      path: "home",
      component: "Home",
      redirect: "",
      icon: "el-icon-location",
      isLink: 0,
      isCache: 0,
      isVisible: 0,
      isDisable: 1,
      isSideMenu: 1,
      status: 1,
      perms: "admin:system:*",
    },
    {
      id: 2,
      orderNum: 2,
      type: 0,
      name: "系统管理",
      title: "系统管理",
      path: "system",
      component: "",
      redirect: "",
      icon: "el-icon-location",
      isLink: 0,
      isCache: 0,
      isVisible: 0,
      isDisable: 1,
      isSideMenu: 1,
      status: 1,
      perms: "admin:system:*",
      children: [
        {
          id: 3,
          orderNum: 1,
          type: 0,
          name: "用户管理",
          title: "用户管理",
          path: "users",
          component: "system",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isVisible: 0,
          isDisable: 1,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        },
        {
          id: 4,
          orderNum: 2,
          type: 0,
          name: "测试2",
          title: "测试2",
          path: "test2",
          component: "test/DynamicTest2",
          redirect: "",
          icon: "el-icon-location",
          isLink: 0,
          isCache: 0,
          isVisible: 0,
          isDisable: 1,
          isSideMenu: 1,
          status: 1,
          perms: "admin:system:*",
        },
      ],
    },
  ];
  return {
    name: "name",
    roles: [],
    permissions: [],
    menus: menus,
  };
});

export default Mock;
