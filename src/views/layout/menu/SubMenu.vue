<template>
	<el-submenu :index="subMenuList.path">
		<template v-slot="">
			<i :class="subMenuList.icon"></i>
			<span slot="title">{{ subMenuList.title }}</span>
		</template>
		<template v-for="item in subMenuList.children">
			<el-menu-item v-if="!item.children || item.children.length === 0" :index="resolvePath(item.path)" :key="item.id">
				<!-- 此处图标可以自定义 -->
				<i :class="subMenuList.icon"></i>
				<span slot="title">{{ item.title }}</span>
			</el-menu-item>
			<SubMenu v-else :subMenuList="item" :key="item.id"></SubMenu>
		</template>
	</el-submenu>
</template>

<script>
	import SubMenu from "./SubMenu.vue";

	export default {
		name: "SubMenu",
		props: {
			subMenuList: {
				type: Object,
				default: () => {},
			},
		},
		components: {
			SubMenu,
		},
		methods: {
			resolvePath(path) {
				return this.subMenuList.path + "/" + path;
			},
		},
	};
</script>

<style scoped></style>
