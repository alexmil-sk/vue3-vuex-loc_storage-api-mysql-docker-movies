export default {
	isChanged(state) {
		return state.isChanged;
	},
	isOpenModal(state) {
		return state.isOpenModal;
	},
	isLoading(state) {
		return state.isLoading;
	},
	films(state) {
		return state.films;
	},
	chosenMovies(state) {
		return state.chosenMovies;
	},
	modalNumberStart(state) {
		return state.modalNumberStart;
	},
	modalNumberEnd(state) {
		return state.modalNumberEnd;
	}
}