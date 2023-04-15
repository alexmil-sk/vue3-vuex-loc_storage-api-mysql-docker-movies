export async function addMysqlMovieItem(values) {
	await fetch('http://localhost:5555/films', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify(values)
	})
}