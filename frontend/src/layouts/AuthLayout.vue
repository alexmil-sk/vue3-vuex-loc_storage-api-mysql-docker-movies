<template>
	<div class="wrapper">
		<transition name="message">
			<ErrorMessage v-if="$store.state.errMessage" />
		</transition>
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
import ErrorMessage from "../components/UI/ErrorMessage.vue";


export default {
	components: {
		ErrorMessage
	},
	mounted() {
		document.body.style.overflow = 'hidden';

		if (this.$route.query.message) {
			this.$store.dispatch('setDelayedMessage', {
				text: "You must enter your account first!",
				type: "warning"
			})
		}
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
	/* position: relative; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 85vh;
}

/* login */

.login-enter-from,
.login-leave-to {
	transform: translateY(-1200px);
}

.login-enter-to,
.login-leave-from {
	transform: translateY(-45%);
}

.login-enter-active,
.login-leave-active {
	transition: all 1500ms linear;
}

/* message */

.message-enter-from,
.message-leave-to {
	transform: translateY(-200%);
}

.message-enter-to,
.message-leave-from {
	transform: translateY(0px);
}

.message-enter-active,
.message-leave-active {
	transition: all 500ms linear;
}
</style>