import cors from 'cors';

export default async function getUserItem(id) {
	const response = await fetch(`https://myfakeapi.com/api/users/${id}`, cors(), {
		method: "GET",
		headers: {
			"Content-Type": 'application/json',
		},
	})
	const user = await response.json();

	return user.User;
}