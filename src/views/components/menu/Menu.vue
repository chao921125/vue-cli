<template>
    <el-scrollbar>
        <el-menu class="menus" :default-active="defaultActive" :collapse="collapse" @select="selectMenu" popper-append-to-body>
            <template v-for="item in menuList">
                <el-menu-item v-if="!item.children || item.children.length === 0" :index="item.path" :key="item.id">
                    <!-- 此处图标可以自定义 -->
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
                <SubMenu v-else :subMenuList="item" :key="item.id"></SubMenu>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script>
// @ is an alias to /src
import SubMenu from "./SubMenu";

export default {
    name: "Menu",
    props: {
        collapse: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        SubMenu,
    },
    data() {
        return {
            imgSrc: [require("@/assets/logo.png"), require("@/assets/logo.png")],
        };
    },
    // 通过store获取菜单信息，且事实监控
    computed: {
        menuList() {
            return this.$store.getters["store/user/getMenus"];
        },
        defaultActive() {
            return this.$route.path.replace("/", "");
        },
    },
    methods: {
        selectMenu(index) {
            this.$router.push({ path: "/" + index });
        },
    },
};
</script>

<style lang="scss" scoped>
.menus {
    height: calc(100vh - 60px);
    &:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
}
</style>
