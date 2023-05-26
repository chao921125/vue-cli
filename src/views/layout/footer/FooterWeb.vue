<template>
	<div class="all">
		<div class="about flex-space-between">
			<div>
				<p>移动云温泉</p>
				<p>电话：400-800-xxxx 传真：400-800-xxxx</p>
				<p>邮箱：yidongyun@yidongyun.com</p>
				<p>地址：深圳市宝安区航城大道西乡光电研发大厦二楼</p>
			</div>
			<div>
				<h6>关于我们</h6>
				<h6>联系我们</h6>
			</div>
			<div>
				<h6>最新消息</h6>
				<h6>最新动态</h6>
			</div>
		</div>
		<div class="other flex-center-row">Copyright © 2023.Company name All rights reserved</div>
	</div>
</template>

<script>
	export default {
		name: "LayoutFooter",
		methods: {
			toRouter(path) {
				this.$router.push({ path: path });
			},
		},
	};
</script>

<style scoped lang="scss">
	.all {
		font-size: 12px;
		color: #434343;
		margin: 0 5rem;
		h6 {
			cursor: pointer;
		}
	}
	.other {
		align-items: center;
	}
</style>
