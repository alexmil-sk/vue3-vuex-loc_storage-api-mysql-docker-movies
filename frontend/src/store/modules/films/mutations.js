import {
	fetchMovies
} from "../../../utils/fetchMovies.js";

export default {
	isLoading(state) {
		state.isLoading = true;
	},
	notIsLoading(state) {
		state.isLoading = false;
	},
	changeMode(state) {
		state.isChanged = !state.isChanged;
	},
	openModalPopup(state) {
		state.isOpenModal = true;
	},
	closeModalPopup(state) {
		state.isOpenModal = false;
	},
	deleteFilmsArray(state) {
		state.films = [];
	},
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
	goModalPopup(state) {
		state.films = [];
		this.commit('films/closeModalPopup');
		this.commit('films/isLoading');
	},
	fetchMoviesMutation(state, payload) {
		fetchMovies(payload.start, payload.end)
			.then(res => state.films = res)
	},
	chooseFilm(state, payload) {
		state.chosenMovies = state.chosenMovies.concat(
			state.films.filter((item) => item.id === payload)
		);
		state.films = state.films.filter(
			(item) => item.id !== payload);
	}
}