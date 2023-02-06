import {
	createStore
} from 'vuex';
import {
	fetchMovies
} from "../../utils/fetchMovies.js";

export default createStore({
	state() {
		return {
			modalNumberStart: null,
			modalNumberEnd: null,
			isLoading: false,
			isOpenModal: false,
			films: [],
		}
	},
	mutations: {
		isLoading(state) {
			state.isLoading = true;
		},
		notIsLoading(state) {
			state.isLoading = false;
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
		goModalPopup(state) {
			state.films = [];
			this.commit('closeModalPopup');
			this.commit('isLoading');
		},
		fetchMoviesMutation(state, payload) {
			fetchMovies(payload.start, payload.end)
				.then(res => state.films = res)
		},
	},
	actions: {
		fetchMoviesAsync(context, payload) {
			context.commit('fetchMoviesMutation', payload);
			context.commit('notIsLoading');
		}
	},
	getters: {
		isLoading(state) {
			return state.isLoading;
		},
		isOpenModal(state) {
			return state.isOpenModal;
		},
		films(state) {
			return state.films;
		},
		modalNumberStart(state) {
			return state.modalNumberStart;
		},
		modalNumberEnd(state) {
			return state.modalNumberEnd;
		}
	}
});