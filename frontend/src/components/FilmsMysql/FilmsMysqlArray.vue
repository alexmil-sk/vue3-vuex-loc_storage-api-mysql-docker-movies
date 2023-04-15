<template>
	<div v-for="film in mysqlFilms" :key="film.id">
		<FilmsMysqlItem :film="film" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import FilmsMysqlItem from "./FilmsMysqlItem.vue";

export default {
	name: "FilmsMysqlArray",
	components: { FilmsMysqlItem },
	computed: {
		...mapGetters('mysql', ['mysqlFilms']),
	}
}
</script>

<style lang="css" scoped>

</style>