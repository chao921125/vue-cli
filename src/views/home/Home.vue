<template>
	<div class="home">
		<el-button @click="$router.push({ path: '/404' })">to 404</el-button>
		<el-button @click="$router.push({ path: '/error' })">to error</el-button>

		<el-button @click="show = !show">click me me</el-button>
		<transition name="el-zoom-in-center">
			<div v-show="show" class="transition-box">.el-zoom-in-center</div>
		</transition>

		<transition name="el-zoom-in-top">
			<div v-show="show" class="transition-box">.el-zoom-in-top</div>
		</transition>

		<transition name="el-zoom-in-bottom">
			<div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
		</transition>
		<transition name="el-zoom-in-left">
			<div v-show="show" class="transition-box">.el-zoom-in-left</div>
		</transition>
		<transition name="el-zoom-in-right">
			<div v-show="show" class="transition-box">.el-zoom-in-right</div>
		</transition>
		<el-collapse-transition>
			<div v-show="show">
				<div class="transition-box">el-collapse-transition</div>
				<div class="transition-box">el-collapse-transition</div>
			</div>
		</el-collapse-transition>

		<el-image class="temp-img" v-loading="loading" placeholder="loading" :src="temp">
			<div slot="placeholder">
				<i class="el-icon-loading"></i>
			</div>
			<div slot="error">
				<i class="el-icon-loading"></i>
			</div>
		</el-image>
		<div class="flex-base">
			<div class="slider-box">
				<div class="slider" :style="{ width: sliderWidth + '%' }"></div>
			</div>
			<div>123</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				loading: false,
				imgSrc: [require("@/assets/logo.png"), require("@/assets/logo.png")],
				isCollapse: false,
				show: false,
				temp: "",
				sliderWidth: 10,
			};
		},
		mounted() {
			setTimeout(() => {
				this.temp = "https://app-tradefinance-1259661131.cos.ap-hongkong.myqcloud.com/file/b3f36a7fa4fd40c286348f0f7f446240_6-4.png";
			}, 3000);
		},
		methods: {
			toggleCollapse() {
				this.isCollapse = !this.isCollapse;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.transition-box {
		margin-right: 20px;
		margin-bottom: 20px;
		width: 200px;
		height: 100px;
		background-color: aqua;
	}
	.temp-img {
		width: 100px;
		height: 100px;
	}
	.slider-box {
		width: calc(100% - 100px);
		height: 20px;
		background-color: aqua;
		.slider {
			height: 20px;
			background-color: aquamarine;
		}
	}
</style>
