<template>
	<div class="wrapper">
		<div class="header">
			<TheNavbar />
			<ModePanel />
		</div>

		<router-view v-slot="{ Component }">
			<transition name="change-pages">
				<component :is="Component" />
			</transition>
		</router-view>

	</div>
</template>
<script>
import ModePanel from "../components/ModePanel/ModePanel.vue";
import TheNavbar from "../components/TheNavbar/TheNavbar.vue";



export default {
	name: "MainLayout",
	components: { TheNavbar, ModePanel }
};
</script>
<style lang="css" scoped>
.header {
	display: flex;
	min-width: 450px;
	justify-content: space-between;
	padding: 5px 45px;
	margin: 0 auto 35px;
}

/* change-pages */

.change-pages-enter-from,
.change-pages-leave-to {
	opacity: 0;
	transform: translateY(100%);
	z-index: 0;

}

.change-pages-enter-to,
.change-pages-leave-from {
	opacity: 1;
	transform: translateY(50%);
	z-index: 100;
}

.change-pages-enter-active,
.change-pages-leave-active {
	transition: all 500ms linear;
}
</style>