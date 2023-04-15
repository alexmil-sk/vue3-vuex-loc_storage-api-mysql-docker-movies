<template>
  <div
		class="card"
		:class="isChanged ? 'bg-for-green' : 'bg-for-red'"
	>
    <img
			:src="film.posterURL"
			width="100"
			height="156"
			:alt="film.title" />
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
	name: "FilmItem",
	props: {
		film: Object,
	},
	computed: {
		...mapGetters('films', ["isChanged"]),
	}
};
</script>


<style lang="css" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 180px;
	width: fit-content;;
  padding: 15px;
  margin: 15px;
  border: 1px solid var(--vt-c-white);
  border-radius: 10px;
  box-shadow: 0 0 15px 5px var(--vt-c-white);
  cursor: pointer;
  transition: 600ms;
}

.card img {
  border-radius: 5px;
  opacity: 1;
  transition: 600ms;
}
.card img:hover {
  opacity: 0.5;
  transition: 600ms;
}
.card img:active {
  opacity: 1;
}

.card.bg-for-green {
  background-color: #67e667;
  transition: 500ms;
}

.card.bg-for-red {
  background-color: #ff7373;
  transition: 500ms;
}
</style>