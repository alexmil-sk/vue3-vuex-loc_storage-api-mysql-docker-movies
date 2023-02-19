
export default {
	fetchMoviesAsync(context, payload) {
		context.commit('fetchMoviesMutation', payload);
		context.commit('notIsLoading');
	}
}