export async function updateMysqlMovieItem(payload) {
	try {
		const res = await fetch(`http://localhost:5555/films/${payload.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(payload)
		})

		return res.json();
	} catch (e) {
		console.log(e);
	}

}