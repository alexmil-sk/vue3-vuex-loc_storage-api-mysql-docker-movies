import {
	createStore,
	createLogger
} from 'vuex';
import films from "./modules/films";
import auth from "./modules/auth";
import mysql from "./modules/mysql";
import contacts from "./modules/contacts";

export default createStore({
	plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
	state() {
		return {
			errMessage: null
		}
	},
	mutations: {
		setErrMessage(state, message) {
			state.errMessage = message;
		},
		removeErrMessage(state) {
			state.errMessage = null;
		}
	},
	actions: {
		setMessage({
			commit
		}, message) {
			commit('setErrMessage', message);
			setTimeout(() => {
				commit('removeErrMessage');
			}, 5000);
		},
		setDelayedMessage({commit}, message) {
			setTimeout(() => {
				commit('setErrMessage', message);
			}, 1000);
			setTimeout(() => {
				commit('removeErrMessage');
			}, 5500);
		}
	},
	modules: {
		auth,
		films,
		mysql,
		contacts
	}
});