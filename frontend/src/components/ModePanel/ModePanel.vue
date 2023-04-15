<template>
	<div class="container-wrapper" v-if="pageType === 'catalog'">
		<div class="container-btn">
			<button class="btn" @click="change">
				<img :src="isChanged ? left : right" />
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "ModePanel",
	data() {
		return {
			left: this.$store.state.films.joinLeft,
			right: this.$store.state.films.joinRight,
		};
	},
	computed: {
		...mapGetters('films', ["isChanged"]),

		pageType() {
			return this.$route.meta.page;
		}
	},
	methods: {
		...mapMutations('films', ["changeMode"]),

		change() {
			this.changeMode();
			this.$toast.show("<h3>Mode was changed!</h3>", {
				type: "info",
			});
		},
	},
};
</script>

<style lang="css" scoped>
.container-wrapper {
	display: flex;
	align-self: end;
	align-items: center;
	justify-content: center;
	justify-self: center;
}

.container-btn {
	border: 2px solid white;
	border-radius: 50%;
	padding: 3px;
}

.btn {
	width: 60px;
	height: 60px;
	padding: 3px 4px;
	border-radius: 50%;
	cursor: pointer;
	border: 1px solid white;
	margin: auto;
	z-index: 90;
}

.btn img {
	width: 100%;
}

.btn {
	background-color: rgba(225, 232, 235, 1);
}

.btn:hover {
	background-color: rgba(225, 232, 235, 1);
}
</style>
