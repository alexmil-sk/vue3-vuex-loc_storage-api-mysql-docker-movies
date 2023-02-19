import { createStore, createLogger } from 'vuex';
import films from "./modules/films";
import auth from "./modules/auth";

export default createStore({
	plugins: process.env.NODE_ENV !== 'production'
		? [createLogger()]
		: [],
	modules: {
		auth,
		films
	}
});








































