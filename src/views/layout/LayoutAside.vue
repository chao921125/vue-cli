<template>
	<div class="menu flex-space-between">
		<ul class="nav">
			<li v-for="(item, index) in menuOption" :key="index" :class="item.path === currentRoute ? 'active' : ''">
				<a :href="item.path">{{ item.name }}</a>
			</li>
		</ul>
		<div class="btn-login">登录</div>
	</div>
</template>

<script>
	export default {
		name: "LayoutAside",
		data() {
			return {
				menuOption: [
					{
						path: "/flights",
						name: "航班",
					},
					{
						path: "/hotels",
						name: "酒店",
					},
					{
						path: "/holidays",
						name: "度假",
					},
					{
						path: "/flightsHotels",
						name: "航班+酒店",
					},
					{
						path: "/bus",
						name: "公交",
					},
					{
						path: "/trains",
						name: "火车",
					},
					{
						path: "/weekend",
						name: "周末",
					},
					{
						path: "/deals",
						name: "交易",
					},
				],
			};
		},
		computed: {
			currentRoute() {
				return this.$route.path;
			},
		},
		methods: {},
	};
</script>

<style scoped lang="scss">
	.menu {
		padding-top: 1rem;
		margin: 0 5rem;
		align-items: center;
		.nav {
			padding: 0;
			margin: 0;
			border-bottom: solid 2px #6fd508;
			li {
				display: inline-block;
				text-decoration: none;
				a {
					display: block;
					padding: 0.5em 2em;
					color: #bdbdbd;
					border: solid 1px #ececec;
					border-bottom: solid 1px #fff;
				}
			}
			.active {
				a {
					background: #6fd508;
					color: #fff;
					border: solid 1px #6fd508;
				}
			}
		}
		.btn-login {
			display: inline-block;
			padding: 0.5em 2em;
			background: #6fd508;
			color: #fff;
			border: solid 1px #6fd508;
		}
	}
</style>
