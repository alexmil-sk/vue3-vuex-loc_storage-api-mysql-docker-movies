export async function fetchMovies(start, end) {
	const movies = await fetch("https://api.sampleapis.com/movies/mystery")
		.then((res) => res.json())
		.then((data) => data.slice(start, end))

	return movies;
};