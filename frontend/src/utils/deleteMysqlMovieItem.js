export async function deleteMysqlMovieItem(id) {
	const res = await fetch(`http://localhost:5555/films/${id}`, {
		method: 'DELETE'
	})

	return res.json();
}