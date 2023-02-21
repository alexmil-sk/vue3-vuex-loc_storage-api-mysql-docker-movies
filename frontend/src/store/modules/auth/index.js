import axios from "axios";
const JWT_TOKEN = 'jwt-token';
import {
	error
} from "../../../utils/error.js";

export default {
	namespaced: true,
	state() {
		return {
			token: localStorage.getItem(JWT_TOKEN),
		}
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			localStorage.setItem(JWT_TOKEN, token);
		},
		removeToken(state) {
			state.token = null;
			localStorage.removeItem(JWT_TOKEN);
		},

	},
	actions: {
		async loginAccount(context, payload) {
			try {
				const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FB_AUTH_KEY}`
				const {
					data
				} = await axios.post(url, {
					...payload,
					returnSecureToken: true
				});
				context.commit('setToken', data.idToken)

				context.commit('removeErrMessage', null, {root: true});

			} catch (err) {

				context.dispatch('setMessage', {
					text: error(err.response.data.error.message),
					type: 'danger'
				}, {
					root: true
				});

			};
		},
		exitAccount(context) {

			context.commit('removeToken');

			context.dispatch('setDelayedMessage', {
				text: 'You was logged out',
				type: 'info'
			}, {
				root: true
			});
		},
	},
	getters: {
		token(state) {
			return state.token;
		},
		isAuthenticated(_, getters) {
			return !!getters.token;
		}
	}
};