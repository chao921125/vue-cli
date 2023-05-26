<template>
	<div class="header flex-base">
		<transition name="fade-transverse" class="flex-center-row header-menu">
			<div :class="isCollapse ? 'logo flex-center-row logo-collapse' : 'logo flex-center-row'">
				<object v-show="!isCollapse" :data="imgSrc[0]" class="img-collapse" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
				<object v-show="isCollapse" :data="imgSrc[1]" class="img-no-collapse" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
			</div>
		</transition>
		<div class="flex-space-between cc-width">
			<div class="cc-pointer flex-center-row cc-ml-5">
				<i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleCollapse"></i>
			</div>
			<div class="flex-center-row cc-mr-20" :class="isCollapse ? 'cc-text-right info-collapse' : 'cc-text-right info'">
				<router-link to="/demo">Demo</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				imgSrc: [require("@/assets/images/header/kehu.svg"), require("@/assets/images/header/shebao.svg")],
				isCollapse: false,
			};
		},
		methods: {
			toggleCollapse() {
				this.isCollapse = !this.isCollapse;
				this.$emit("isCollapse", this.isCollapse);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 60px;
		background-color: #fff;
		.logo {
			background-color: #fff;
		}
		.logo-collapse {
			width: 65px;
		}
		.img-collapse {
			width: 200px;
			height: 50px;
		}
		.img-no-collapse {
			width: 50px;
			height: 50px;
		}
		.header-menu {
			width: 200px;
		}
	}
</style>
