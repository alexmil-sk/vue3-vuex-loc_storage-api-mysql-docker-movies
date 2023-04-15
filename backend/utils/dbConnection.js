import mysql from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();

const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

const dbConnect = mysql.createPool({
	connectionLimit: 100,
	host: MYSQL_HOST,
	port: MYSQL_PORT,
	user: MYSQL_USER,
	password: MYSQL_PASSWORD,
	database: MYSQL_DATABASE
});

const CREATE_FILMS_TABLE_SQL = `CREATE TABLE IF NOT EXISTS films (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	image TEXT,
	title TEXT,
	rating INTEGER,
	year TEXT
)`;

setTimeout(() => {

	dbConnect.getConnection((error, connection) => {
		if (!error) {
			console.log('Connected to the MySQL DB with CONNECTION_ID: ' + connection.threadId);

			connection.query(CREATE_FILMS_TABLE_SQL, (error) => {
				if (!error) {
					console.log('Films table has been created');
				} else {
					console.log(error.sqlMessage);
					console.log('Films table has not been created');
				}
			});

			connection.release();
		} else if (error) {
			console.log('ERROR_MESSAGE: ', error.sqlMessage);
			console.log('ERROR: ', error);
			console.log('Connection was denied!');
		}

	});
}, 40000);


export default dbConnect;