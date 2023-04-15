import {
	fetchMysqlMovies
} from "../../../utils/fetchMysqlMovies.js";
import {
	getMysqlMovieItem
}
from "../../../utils/getMysqlMovieItem.js";
import {
	updateMysqlMovieItem
}
from "../../../utils/updateMysqlMovieItem.js";
import {
	addMysqlMovieItem
} from "../../../utils/addMysqlMovieItem.js";
import {
	deleteMysqlMovieItem
}
from "../../../utils/deleteMysqlMovieItem.js";


export default {

	// Fetching array of films ========================================================

	async fetchMysqlMoviesAsync(context) {
		await fetchMysqlMovies()
			.then((movies) => {
				context.state.isLoadingMysql = true;
				setTimeout(() => {
					context.commit('fetchMysqlMoviesMutation', movies);
					context.state.isLoadingMysql = false;
				}, 2000);
			})
	},

	// getting films` item for editing ========================================================

	getMysqlMovieItemAsync(context, id) {
		getMysqlMovieItem(id)
			.then(async arr => {
				context.commit('getMysqlMovieItemMutation', await arr[0])
			})
	},

	// adding film item in films array ========================================================


	async addMysqlMovieItemAsync(context, payload) {
		await addMysqlMovieItem(payload);
		setTimeout(() => {
			context.commit('addMysqlMovieItemMutation', payload);
		}, 2000);
	},

	// updating film item in films array ========================================================

	updateMysqlMovieItemAsync(context, payload) {
		updateMysqlMovieItem(payload)
			.then(async (obj) => {
				context.commit('updateMysqlMovieItemMutation', await obj);
			})
	},

	// deleting film out of films array ========================================================

	deleteMysqlMovieItemAsync(context, id) {
		deleteMysqlMovieItem(id);
		setTimeout(() => {
			context.commit('deleteMysqlMovieItemMutation', id);
		}, 600);
	}
}