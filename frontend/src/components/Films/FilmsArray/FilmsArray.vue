<template>
  <div class="film-items_wrapper">
    <div class="film-items_wrapper_cat">
      <div v-for="film in films" :key="film.id">
        <FilmItem :film="film" @click="choose(film.id)" />
      </div>
    </div>
  </div>
</template>
<script>
import FilmItem from "./FilmItem/FilmItem.vue";
import { mapGetters } from 'vuex';


export default {

	name: "FilmsArray",
  components: { FilmItem },
	computed: {

		...mapGetters(['films', 'chosenMovies'])
		//films() {
    //  return this.$store.state.films;
		//},
		//chosenMovies() {
		//	return this.$store.state.chosenMovies;
		//}
  },
	//emits: ["chooseFilm"],
	methods: {
		choose(id) {
			const selectedMovie = this.films.find((item) => item.id === id);
			const isExist = this.chosenMovies.find((item) => item.id === id);

			if (isExist) {
				setTimeout(() => {
					this.$toast.show(
						`<h3>The Movie ${selectedMovie.title} already exist!</h3>`,
						{
							type: "error",
						}
					);
				}, 500);
			} else {
				
				this.$store.commit('chooseFilm', id);

				setTimeout(() => {
					this.$toast.show(
						`<h3>The Movie ${selectedMovie.title} was selected!</h3>`,
						{
							type: "default",
						}
					);
				}, 500);
			}
		}
	}
};
</script>

<style lang="css" scoped>
.film-items_wrapper {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.film-items_wrapper_cat {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>