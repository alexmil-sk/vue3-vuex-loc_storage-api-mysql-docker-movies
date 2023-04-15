import cors from 'cors';

export default async function getUsers() {
	const response = await fetch(`https://myfakeapi.com/api/users/`, cors(), {
		method: "GET",
		headers: {
			"Content-Type": 'application/json',
		},
	})
	const users = await response.json();

	return users.Users;
}