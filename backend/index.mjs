import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import {
	getFilms,
	updateFilms,
	getFilmItem,
	addFilmItem,
	deleteFilmItem
} from './utils/dbActions.js';

const EXPRESS_PORT = process.env.EXPRESS_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => res.send('Backend is now running...'));

app.get("/films", getFilms);

app.put("/films/:id", updateFilms);

app.get("/films/:id", getFilmItem);

app.post("/films", addFilmItem);

app.delete("/films/:id", deleteFilmItem);


app.listen(EXPRESS_PORT, () => console.log(`Backend is running on port: ${EXPRESS_PORT}`));