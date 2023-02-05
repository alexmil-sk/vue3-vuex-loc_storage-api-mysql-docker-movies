import {
	createStore
} from 'vuex';
import delete_icon from "../assets/icons/delete.png";
import download_icon from "../assets/icons/download.png";
import join_right from "../assets/mode/join_right_red.png";
import join_left from "../assets/mode/join_left_green.png";
import logo from "../assets/logo/logo.png";
import {
	fetchMovies
} from "../utils/fetchMovies.js";



const store = createStore({
	state() {
		return {
			deleteIcon: delete_icon,
			downloadIcon: download_icon,
			joinRight: join_right,
			joinLeft: join_left,
			logo: logo,
			modalNumberStart: null,
			modalNumberEnd: null,
			isChanged: false,
			isLoading: false,
			isOpenModal: false,
			films: [],
			chosenMovies: [],
		}
	},
	mutations: {
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
		goModalPopup() {
			this.commit('closeModalPopup');
			this.commit('isLoading');
		},
		fetchMoviesMutation(state, payload) {
			fetchMovies(payload.start, payload.end)
				.then(res => state.films = res)
		}
	},
	actions: {
		fetchMoviesAsync(context, payload) {
			context.commit('fetchMoviesMutation', payload);
		}
	},
	getters: {
		isChanged(state) {
			return state.isChanged;
		},
		isOpenModal(state) {
			return state.isOpenModal;
		},
		isLoading(state) {
			return state.isLoading;
		},
		joinRight(state) {
			return state.joinRight;
		},
		joinLeft(state) {
			return state.joinLeft;
		},
		logo(state) {
			return state.logo;
		},
		films(state) {
			return state.films;
		},
		chosenMovies(state) {
			return state.chosenMovies;
		}
	}
});

export default store;