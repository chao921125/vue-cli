<template>
	<el-container>
		<el-header class="header" style="height: auto">
			<layout-header></layout-header>
			<layout-aside></layout-aside>
		</el-header>
		<el-main><router-view /></el-main>
		<el-footer class="footer" style="height: auto"><layout-footer></layout-footer></el-footer>
	</el-container>
</template>

<script>
	import LayoutHeader from "./LayoutHeader.vue";
	import LayoutAside from "./LayoutAside.vue";
	import LayoutFooter from "./LayoutFooter.vue";
	export default {
		name: "Layout",
		components: { LayoutAside, LayoutHeader, LayoutFooter },
	};
</script>

<style scoped lang="scss">
	@import "~@/views/layout/index";
</style>
