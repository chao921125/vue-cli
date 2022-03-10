import util from "@/plugins/utils";
import { login, logout, getUserInfo } from "@/api/user";
import routers from "@/router/config";

export default {
  namespaced: true,
  state: {
    // 用户信息
    token: util.cookies.get("token"),
    uuid: util.cookies.get("uuid"),
    name: "",
    avatar: require("@/assets/logo.png"),
    roles: [], // 角色
    permissions: [], // 权限
    menus: [], // 菜单
    routes: [], // 路由
  },
  getters: {
    getMenus: (state) => {
      return state.menus;
    },
    getRoutes: (state) => {
      return state.routes;
    },
  },
  mutations: {
    setUserInfo: (state, userInfo) => {
      state.name = userInfo.name || "";
      state.avatar = userInfo.avatar === "" ? require("@/assets/logo.png") : process.env.VUE_APP_BASE_API + userInfo.avatar;
      state.roles = userInfo.roles || [];
      state.permissions = userInfo.permissions || [];
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setUUID: (state, uuid) => {
      state.uuid = uuid;
    },
    setMenus: (state, menus) => {
      state.menus = menus;
    },
    setRouters: (state, routers) => {
      state.routers = routers;
    },
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        // 开始请求登录接口
        login(userInfo)
          .then(async (resp) => {
            // 设置 cookie 一定要存 uuid 和 token 两个 cookie
            // 整个系统依赖这两个数据进行校验和存储
            // uuid 是用户身份唯一标识 用户注册的时候确定 并且不可改变 不可重复
            // token 代表用户当前登录状态 建议在网络请求中携带 token
            // 如有必要 token 需要定时更新，默认保存一天
            util.cookies.set("token", resp.token);
            util.cookies.set("uuid", resp.uuid);
            commit("setToken", resp.token);
            commit("setUUID", resp.uuid);
            // 结束
            resolve(resp);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        let logoutParams = {
          token: state.token,
          uuid: state.uuid,
        };
        logout(logoutParams)
          .then((resp) => {
            // 删除cookie
            util.cookies.remove("token");
            util.cookies.remove("uuid");
            commit("setUserInfo", {});
            resolve(resp);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    /**
     * 既然封装了动态的路由，那么以后也可以直接修改此处代码实现静态路由。
     * @param commit
     * @param state
     * @returns {Promise<unknown>}
     */
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // 增加静态配置路由，模拟接口访问，可以替换掉下面的接口。
        console.log(routers.userInfo);
        let userParams = {
          token: state.token,
          uuid: state.uuid,
        };
        getUserInfo(userParams)
          .then(async (resp) => {
            // 菜单和路由
            commit("setMenus", resp.menus);
            let routers = setRouter(resp.menus);
            commit("setRouters", routers);
            // 删除掉菜单，反正你也用不到
            commit("setUserInfo", delete resp.menus);
            resolve(routers);
          })
          .catch((error) => {
            util.log.danger(">>>>>> 获取用户信息失败 >>>>>>", error);
            reject(error);
          });
      });
    },
  },
};

// 模拟返回数据，后端要处理掉按钮级别的数据，前端不做处理，对应的数据一定要存储int或者char
// let returnDemo = {
//   id: 1, // 当前id -----后端筛选
//   parentId: 0, // 父菜单id 0 代表顶级菜单 -----后端筛选
//   orderNum: 1, // 显示顺序 array.sort((a,b) => {return a.id - b.id}); -----后端筛选
//   type: 0, // 菜单类型 0 目录，1菜单，2按钮 -----后端筛选
//   name: "", // 菜单名称
//   title: "", // 页面标题 —— 路由使用
//   path: "", // 请求地址
//   component: "", // 组件路径 —— 路由使用
//   redirect: "", // 组件路径 —— 路由使用
//   icon: "", // 菜单图标 判断包含的内容是否包含组件以及自定义标签，否则只支持svg格式 icon.length-4 === (icon.indexOf(".svg") || icon.indexOf(".SVG"));
//   isLink: 0, // 是否为外链 默认0，1代表外链，外链时路由地址即为绝对路径
//   isDisable: 1, // 是否可点击 默认1，0不可点 !isDisable
//   status: 1, // 菜单状态 默认1，0停用（后端标记使用） -----后端筛选
//   perms: "*", // 权限标识 admin:system:*
//   isCache: 0, // 是否缓存 默认0，1 keep-alive 缓存数据——路由使用
//   isHidden: true, // 是否展示侧边栏 默认true，false不展示——路由使用
//   isHideSubMenu: true, // 子菜单是否展示侧边栏 默认false，true不展示——路由使用
// };

// 组装动态路由
const setRouter = (dataList) => {
  // 必须为根路由，不能在其他地方生成component，除非在store里面
  // () => import("@/views/Index"),
  // () => Promise.resolve(require(`@/views/${view}`).default)
  // (resolve) => require([`@/views/${view}`], resolve);
  let rootRouter = [
    {
      path: "",
      redirect: { name: "/" },
    },
    {
      path: "/",
      name: "/",
      redirect: { name: "index" },
      children: [
        // 首页 必须 name:index
        // 刷新页面 必须保留
        {
          path: "refresh",
          name: "refresh",
          hidden: true,
          component: {
            beforeRouteEnter(to, from, next) {
              next((vm) => vm.$router.replace(from.fullPath));
            },
            render: (h) => h(),
          },
        },
        // 页面重定向 必须保留
        {
          path: "redirect/:route*",
          name: "redirect",
          hidden: true,
          component: {
            beforeRouteEnter(to, from, next) {
              next((vm) => vm.$router.replace(JSON.parse(from.params.route)));
            },
            render: (h) => h(),
          },
        },
      ],
    },
  ];
  let addRouters = {
    path: "/index",
    name: "index",
    redirect: { name: "home" },
    component: loadView("Index"),
    meta: {
      auth: true,
    },
    children: [],
  };
  let lastRouter = [
    {
      path: "/:pathMatch(.*)*",
      component: loadView("error/404"),
      meta: {
        icon: "",
        title: "404",
        auth: false,
        isDisable: true,
        isCache: false,
      },
    },
    {
      path: "/:pathMatch(.*)",
      component: loadView("error/404"),
      meta: {
        icon: "",
        title: "404",
        auth: false,
        isDisable: true,
        isCache: false,
      },
    }
  ];
  setItemRouter(addRouters.children, dataList, "");
  return [...rootRouter, addRouters, ...lastRouter];
};
const setItemRouter = (routerList, dataList, baseUrl) => {
  for (let data of dataList) {
    let path = baseUrl + "/" + data.path;
    let route = {
      path: path,
      name: data.path,
      redirect: "",
      component: loadView(data.component || "Index"),
      meta: {
        icon: "",
        title: data.title,
        auth: true,
        isSideMenu: !!data.isSideMenu,
        isCache: !data.isCache,
      },
      children: [],
    };
    if (data.children && data.children.length > 0) {
      // 当访问的路由是含有子节点的路由，并且子节点非菜单，那么重定向
      if (!data.isHideSubMenu) {
        route.redirect = { name: data.children[0].path };
      }
      routerList.push(route);
      setItemRouter(routerList, data.children, path);
    } else {
      routerList.push(route);
    }
  }
};
export const loadView = (view) => {
  // 路由懒加载
  // return (resolve) => require([`@/views/${view}`], resolve);
  return () => Promise.resolve(require(`@/views/${view}`).default);
};
