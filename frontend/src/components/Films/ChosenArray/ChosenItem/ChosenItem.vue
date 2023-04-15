<template>
	<div class="card" :class="isChanged ? 'bg-for-red' : 'bg-for-green'">
		<img :src="movie.posterURL" width="100" height="156" :alt="movie.title" />
		<button class="del-btn" :class="isChanged ? 'bg-for-green' : 'bg-for-red'" @click="deleteItem(movie)">&times;</button>
	</div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	name: "ChosenItem",
	props: {
		movie: Object,
	},
	methods: {
		...mapMutations('films', ['deleteChosenItem']),
		deleteItem(movie) {
			this.deleteChosenItem(movie.id);
			setTimeout(() => {
				this.$toast.show(
					`<h3>Movie ${movie.title} was deleted from selected!</h3>`,
					{
						type: "warning",
					}
				);
			}, 600);
		},
	},
	computed: {
		...mapGetters('films', ["isChanged"]),
	},
};
</script>


<style lang="css" scoped>
.card {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	min-height: 180px;
	width: fit-content;
	padding: 15px;
	margin: 15px;
	border: 1px solid var(--vt-c-white);
	border-radius: 10px;
	box-shadow: 0 0 15px 5px var(--vt-c-white);
}

.card img {
	border-radius: 5px;
}


.card.bg-for-green,
.del-btn.bg-for-green {
	background-color: #67e667;
	transition: background-color 500ms;
}

.card.bg-for-red,
.del-btn.bg-for-red {
	background-color: #ff7373;
	transition: background-color 500ms;
}

.del-btn {
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	border-top-right-radius: 10px;
	border: 1px solid var(--vt-c-white);
	cursor: pointer;
	color: var(--vt-c-white);
	font-size: 25px;
	margin: 2px 2px 0 0;
	transition: all 600ms;
}

.del-btn:hover {
	box-shadow: 0 0 15px 5px var(--vt-c-white);
	background: var(--vt-c-white);
	transition: all 600ms;

}

.del-btn.bg-for-red:hover {
	border: 1px solid rgb(250, 2, 2);
	color: rgb(250, 2, 2);
	transition: all 600ms;

}

.del-btn.bg-for-green:hover {
	border: 1px solid green;
	color: green;
	transition: all 600ms;
}

.del-btn.bg-for-red:active,
.del-btn.bg-for-green:active  {
	box-shadow: none;
	color: var(--vt-c-white);
}
.del-btn.bg-for-red:active {
	background: rgb(250, 2, 2);
}

.del-btn.bg-for-green:active {
	background: green;
}
</style>