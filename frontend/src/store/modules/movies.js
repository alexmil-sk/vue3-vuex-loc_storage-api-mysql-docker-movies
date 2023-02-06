import {
	createStore
} from 'vuex';

export default createStore({
	state() {
		return {
			chosenMovies: [],
		}
	},
	mutations: {
		deleteChosenMoviesArray(state) {
			state.chosenMovies = [];
		},
		deleteChosenItem(state, payload) {

			const selectedMovie = state.chosenMovies.find(
				(item) => item.id === payload
			);
			const isExist = state.films.find((item) => item.id === payload);

			state.chosenMovies = state.chosenMovies.filter(
				(item) => item.id !== payload
			);

			if (!isExist) {
				state.films.push(selectedMovie);
				localStorage.setItem("films", JSON.stringify(state.films));
			}
		},
	},
	actions: {},
	getters: {
		chosenMovies(state) {
			return state.chosenMovies;
		},
	}
});
