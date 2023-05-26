<template>
	<el-container>
		<Admin v-if="isAdmin"></Admin>
		<Web v-else></Web>
	</el-container>
</template>

<script>
	import Admin from "./frame/Admin.vue";
	import Web from "./frame/Web.vue";
	export default {
		name: "Layout",
		components: { Admin, Web },
		data() {
			return {
				isAdmin: false,
			};
		},
	};
</script>

<style scoped lang="scss"></style>
