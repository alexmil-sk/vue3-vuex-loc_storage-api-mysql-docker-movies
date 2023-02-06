import {
	createStore
} from 'vuex';
import filmsModule from "./modules/films.js";
import moviesModule from "./modules/movies.js";
import delete_icon from "../assets/icons/delete.png";
import download_icon from "../assets/icons/download.png";
import join_right from "../assets/mode/join_right_red.png";
import join_left from "../assets/mode/join_left_green.png";
import logo from "../assets/logo/logo.png";

const store = createStore({
	modules: {
		films: filmsModule,
		movies: moviesModule
	},
	state() {
		return {
			deleteIcon: delete_icon,
			downloadIcon: download_icon,
			joinRight: join_right,
			joinLeft: join_left,
			logo: logo,
			isChanged: false,
		}
	},
	mutations: {
		changeMode(state) {
			state.isChanged = !state.isChanged;
		},
	},
	actions: {},
	getters: {
		isChanged(state) {
			return state.isChanged;
		},
	}
});

export default store;