<template>
	<div :class="['alert', message.type]">
		<div class="">
			<p class="alert-title">{{ titleSet[message.type] }}</p>
			<p>{{ message.text }}</p>
		</div>
		<span class="alert-close" @click="$store.commit('removeErrMessage')">&times;</span>
		<div class="progress"></div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			titleSet: {
				danger: "ERROR!",
				primary: 'SUCCESS!',
				warning: 'WARNING!',
				info: 'INFO'
			}
		}
	},
	computed: {
		message() {
			return this.$store.state.errMessage;
		},
	},
}
</script>
<style lang="css">
@import "../../assets/styles/reg_auth.css"
</style>