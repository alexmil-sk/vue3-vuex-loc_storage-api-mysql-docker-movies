<template>
	<div class="wrapper">
		<div class="container">

			<router-view v-slot="{ Component }">
				<transition name="login">
					<component :is="Component" />
				</transition>
			</router-view>

		</div>
	</div>
</template>
<script>


export default {

	mounted() {
		document.body.style.overflow = 'hidden';
	}

}
</script>
<style lang="css" scoped>
.wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 85vh;
}

/* login */

.login-enter-from,
.login-leave-to {
	transform: translateX(-3000px) ;
}

.login-enter-to,
.login-leave-from {
	transform: translateX(-250px);
}

.login-enter-active,
.login-leave-active {
	transition: all 1000ms ease-out;
}
</style>