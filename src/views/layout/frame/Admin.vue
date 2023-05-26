<template>
	<el-container>
		<el-header>Header</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-main>
					<keep-alive v-if="$route.meta.isCache">
						<transition><router-view></router-view></transition>
					</keep-alive>
					<transition v-else><router-view></router-view></transition>
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		name: "Admin",
	};
</script>

<style scoped lang="scss"></style>
