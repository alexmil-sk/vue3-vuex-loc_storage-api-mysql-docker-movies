import {
	createStore,
	createLogger
} from 'vuex';
import films from "./modules/films";
import auth from "./modules/auth";

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
		setMessage(context, message) {
			context.commit('setErrMessage', message);
			setTimeout(() => {
				context.commit('removeErrMessage');
			}, 5000);
		},
		setDelayedMessage(context, message) {
			setTimeout(() => {
				context.commit('setErrMessage', message);
			}, 1000);
			setTimeout(() => {
				context.commit('removeErrMessage');
			}, 5000);
		}
	},
	modules: {
		auth,
		films
	}
});