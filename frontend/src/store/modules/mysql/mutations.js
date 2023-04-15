export default {

	fetchMysqlMoviesMutation(getters, payload) {
			getters.mysqlFilms = payload;
	},

	getMysqlMovieItemMutation(getters, payload) {
		getters.mysqlFilmItem = payload;
	},

	addMysqlMovieItemMutation(getters, payload) {
		getters.mysqlFilms = [...getters.mysqlFilms, payload];
	},

	updateMysqlMovieItemMutation(getters, payload) {
		getters.mysqlFilmItem = payload;
	},

	deleteMysqlMovieItemMutation(getters, id) {
			getters.mysqlFilms = getters.mysqlFilms.filter(i => i.id !== id);
	}
}