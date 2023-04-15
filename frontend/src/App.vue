<template>
	<div>
		<Transition name="login">
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
	computed: {
		layoutType() {
			return this.$route.meta.layout;
		},
	},
};
</script>

<style lang="css" scoped>

/* login */

.login-enter-from,
.login-leave-to {
	transform: scale(0) translateY(-500px);
}

.login-enter-to,
.login-leave-from {
	transform: scale(1) translateY(0);
}

.login-enter-active,
.login-leave-active {
	transition: all 1.5s ease;
}
</style>
