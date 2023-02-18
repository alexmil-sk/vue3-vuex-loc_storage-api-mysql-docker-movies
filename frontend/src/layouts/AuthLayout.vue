<template>
	<div class="wrapper">
		<div class="container">
			<Transition name="login">
				<router-view></router-view>
			</Transition>
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
	transform: scale(0) translateY(-500px);
}

.login-enter-to,
.login-leave-from {
  transform: scale(1) translateY(0);
}

.login-enter-active,
.login-leave-active {
  transition: all 1000ms ease;
}
</style>