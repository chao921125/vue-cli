<template>
	<div class="index cc-width">
		<el-container class="header-box cc-width">
			<el-header>
				<Header @isCollapse="toggleCollapse"></Header>
			</el-header>
		</el-container>
		<el-container class="content-box cc-width">
			<el-aside width="auto">
				<Menu :collapse="isCollapse"></Menu>
			</el-aside>
			<el-main class="main-box">
				<!-- :include="whiteList" :exclude="blackList" :max="amount" 是否缓存页面，后期添加-->
				<keep-alive v-if="$route.meta.isCache">
					<transition><router-view></router-view></transition>
				</keep-alive>
				<router-view v-else></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import Header from "./components/header/Header";
	import Menu from "./components/menu/Menu";

	export default {
		name: "Index",
		components: {
			Header,
			Menu,
		},
		data() {
			return {
				isCollapse: false,
			};
		},
		methods: {
			toggleCollapse(value) {
				this.isCollapse = value;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.index {
		.el-header {
			padding: 0;
			display: flex;
			align-items: center;
		}
		.header-box {
			height: 60px;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
		}
		.content-box {
			position: relative;
			z-index: 1000;
			height: calc(100vh - 60px);
			margin-top: 60px;
			.main-box {
				margin: 10px !important;
				background-color: #fff;
			}
		}
	}
</style>
