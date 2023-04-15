export async function fetchMysqlMovies() {
	const mysqlMovies = await fetch('http://localhost:5555/films')
		.then(res => res.json())
	
	return mysqlMovies;
}