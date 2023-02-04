<template>
  <div class="film-items_wrapper">
    <div class="film-items_wrapper_cat">
      <div v-for="film in films" :key="film.id">
        <FilmItem
          :film="film"
          @click="$emit('chooseFilm', film.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import FilmItem from "./FilmItem/FilmItem.vue";

export default {
  components: { FilmItem },
	props: {
		films: Array,
	},
  emits: ["chooseFilm"],
  data() {
    return {};
  },
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