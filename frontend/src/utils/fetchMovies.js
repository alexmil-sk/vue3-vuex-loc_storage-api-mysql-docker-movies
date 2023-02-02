export async function fetchMovies(length) {
	const movies = await fetch("https://api.sampleapis.com/movies/mystery")
		.then((res) => res.json())
		.then((data) => data.splice(0, length))

	return movies;
};