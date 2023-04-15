export async function getMysqlMovieItem(id) {
	const mysqlMovieItem = await fetch(`http://localhost:5555/films/${id}`)
		.then(res => res.json())	
			return mysqlMovieItem;
}