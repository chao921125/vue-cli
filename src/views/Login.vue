<template>
	<div>
		<el-button @click="submitForm">login</el-button>
	</div>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		name: "Login",
		methods: {
			...mapActions("store/user", ["login"]),
			async submitForm() {
				// 调用store的登录，然后存储各种数据
				await this.login({
					username: "admin",
					password: "admin123",
				}).then(() => {
					this.$router.push({ path: "/index" });
				});
			},
		},
	};
</script>

<style scoped></style>
