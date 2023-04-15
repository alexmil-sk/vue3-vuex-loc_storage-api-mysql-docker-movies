<template>
	<button @click="$emit('action')" :class="color" class="btn-ui">
		<slot />
	</button>
</template>
<script>

export default {
	name: "ButtonUi",
	props: ["color"],
};
</script>
<style lang="css" scoped>
.btn-ui {
	cursor: pointer;
	border-radius: 50%;

}

.red {
	background-color: crimson;
}

.lightblue {
	background-color: rgb(12, 110, 151);
}
</style>