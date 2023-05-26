<template>
	<div class="logo flex-space-between">
		<div>LOGO</div>
		<div>TELL: <span class="re-ml-10 font-bold">666 666 666</span></div>
	</div>
</template>

<script>
	export default {
		name: "LayoutHeader",
	};
</script>

<style scoped lang="scss">
	.logo {
		margin: 0 5rem;
		color: #a9a9a9;
		font-size: 1em;
		align-items: center;
		.font-bold {
			color: #292929;
			font-family: "Roboto", sans-serif;
			font-weight: 600;
			font-size: 2em;
		}
	}
</style>
