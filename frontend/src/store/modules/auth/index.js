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
		async loginAccount({
			commit,
			dispatch
		}, payload) {
			try {
				const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FB_AUTH_KEY}`
				const {
					data
				} = await axios.post(url, {
					...payload,
					returnSecureToken: true
				});
				commit('setToken', data.idToken)

				commit('removeErrMessage', null, {
					root: true
				});

			} catch (err) {

				dispatch('setMessage', {
					text: error(err.response.data.error.message.slice(0, 27).trim()),
					type: 'danger'
				}, {
					root: true
				});

				throw new Error();

			};
		},

		async regAccount({
			commit,
			dispatch
		}, payload) {

			try {
				const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FB_AUTH_KEY}`;
				const res = await axios.post(url, {
					...payload,
					returnSecureToken: true
				});

				commit('setToken', res.data.idToken);

				dispatch('setMessage', {
					text: error(res.data.kind.slice(16)),
					type: 'primary'
				}, {
					root: true
				})

			} catch (err) {

				dispatch('setMessage', {
					text: error(err.response.data.error.message),
					type: 'danger'
				}, {
					root: true
				});

				throw new Error();
			}

		},
		exitAccount({
			commit,
			dispatch
		}) {

			commit('removeToken');

			dispatch('setDelayedMessage', {
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