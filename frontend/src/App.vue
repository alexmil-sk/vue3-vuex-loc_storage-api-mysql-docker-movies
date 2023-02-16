<template>
	<div>
		<Transition name="chosen">
			<Component :is="`${layoutType}-layout`" v-if="layoutType" />
		</Transition>
</div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";

export default {
	name: "App",
	components: {
		MainLayout,
		AuthLayout,
	},
	data() {
		return {
			isAuth: false,
		};
	},
	mounted() {
		this.isAuth = localStorage.getItem("isAuth");
	},
	methods: {
		login() {
			this.isAuth = true;
			this.$router.replace("/home");
		},
		logout() {
			this.isAuth = false;
			this.$router.replace("/login");
		},
	},
	provide() {
		return {
			login: this.login,
			logout: this.logout,
		};
	},
	watch: {
		isAuth(newValue) {
			localStorage.isAuth = newValue;
		},
	},
	computed: {
		layoutType() {
			return this.$route.meta.layout;
		},
	},
};
</script>

<style lang="css" scoped>
/* chosenMovies */

.chosen-enter-from,
.chosen-leave-to {
	transform: scale(0) translateY(-500px);
}

.chosen-enter-to,
.chosen-leave-from {
  transform: scale(1) translateY(0);
}

.chosen-enter-active,
.chosen-leave-active {
  transition: all 500ms ease;
}
</style>
