<template>
	
	<div class="wrapper">
		<div class="container">
			<router-view></router-view>
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

</style>