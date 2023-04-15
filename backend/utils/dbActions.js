import dbConnect from './dbConnection.js';

//Getting an array of movies

const getFilms = (_, res) => {
	const q = `SELECT * FROM films`;
	dbConnect.query(q, (error, data) => {
		if (error) return res.json(error);
		return res.json(data);
	})
};

//Update an array of movies

const updateFilms = (req, res) => {
	const q = "UPDATE films SET `id` = ?, `image` = ?, `title` = ?, `rating` = ?, `year` = ? WHERE id = ?";
	const values = [req.body.id, req.body.image, req.body.title, req.body.rating, req.body.year];

	const filmId = req.params.id;

	dbConnect.query(q, [...values, filmId], (error, _) => {
		if (error) return res.json(error);
		return res.json(`Film's #${filmId} data has been updated successfully!`);
	});
};

//Getting information about the movie

const getFilmItem = (req, res) => { 
	const q = `SELECT * FROM films WHERE id = ?`;
	const id = req.params.id;

	dbConnect.query(q, [id], (error, data) => {
		if (error) return res.json(error);
		return res.json(data);
	});
};

//Add a new movie to the database

const addFilmItem = (req, res) => {
	const q = "INSERT INTO films (`id`, `image`, `title`, `rating`, `year`) VALUES (?)";
	const values = [req.body.id, req.body.image, req.body.title, req.body.rating, req.body.year];

	dbConnect.query(q, [values], (error, _) => {
		if (error) return res.json(error);

		return res.json(`Film #${req.body.id} has been added successfully!`);
	});
};

//Deleting a movie from the database

const deleteFilmItem = (req, res) => {
	const q = `DELETE FROM films WHERE id = ?`;
	const filmId = req.params.id;

	dbConnect.query(q, [filmId], (error, _) => {
		if (error) return res.json(error);
		return res.json(`Film's #${filmId} data has been deleted successfully!`);
	});
};


export {
	getFilms, updateFilms, getFilmItem, addFilmItem, deleteFilmItem
};

