<template>
	<el-container>
		<el-header class="header" style="height: auto">
			<layout-header></layout-header>
			<layout-aside></layout-aside>
		</el-header>
		<el-main>
			<keep-alive v-if="$route.meta.isCache">
				<transition><router-view></router-view></transition>
			</keep-alive>
			<transition v-else><router-view></router-view></transition>
		</el-main>
		<el-footer class="footer" style="height: auto"><layout-footer></layout-footer></el-footer>
	</el-container>
</template>

<script>
	import LayoutAside from "../menu/MenuWeb.vue";
	import LayoutFooter from "../footer/FooterWeb.vue";
	import LayoutHeader from "../header/HeaderWeb.vue";

	export default {
		name: "Web",
		components: { LayoutHeader, LayoutFooter, LayoutAside },
	};
</script>

<style scoped lang="scss">
	@import "~./web.scss";
</style>
