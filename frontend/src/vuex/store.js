import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			isChanged: false,
		}
	}
});

export default store;