<template>
	<div class="index cc-width">
		<el-container class="header-box cc-width">
			<el-header>
				<HeaderBlank></HeaderBlank>
			</el-header>
		</el-container>
		<el-container class="main-box cc-width">
			<el-main>
				<!-- 需要缓存 -->
				<keep-alive>
					<transition><router-view></router-view></transition>
				</keep-alive>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import HeaderBlank from "./components/header/HeaderBlank";

	export default {
		name: "IndexBlank",
		components: {
			HeaderBlank,
		},
	};
</script>

<style scoped></style>
