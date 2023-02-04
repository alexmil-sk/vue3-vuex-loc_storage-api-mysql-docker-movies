<template>
  <div class="movie-items_wrapper">
    <div class="movie-items_wrapper_cat">
      <div v-for="movie in chosenMovies" :key="movie.id">
        <ChosenItem
          :movie="movie"
          @deleteChosenItem="$emit('deleteChosenItem', movie.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChosenItem from "./ChosenItem/ChosenItem.vue";

export default {
  components: { ChosenItem },
	computed: {
		chosenMovies() {
			return this.$store.state.chosenMovies;
		}
	},
	emits: ['deleteChosenItem']
};
</script>

<style lang="css" scoped>
.movie-items_wrapper {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.movie-items_wrapper_cat {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
}

@media (max-width: 1090px) {
  .movie-items_wrapper_cat {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 620px) {
  .movie-items_wrapper_cat {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 450px) {
  .movie-items_wrapper_cat {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>