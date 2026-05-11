import mysql from 'mysql2/promise';

let pool = null;

export async function initPool() {
	pool = await mysql.createPool({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		port: process.env.DB_PORT || 3306,
		waitForConnections: true,
		connectionLimit: 10
	});

	console.log('Connected to MySQL database!');
	return pool;
}

export function getConnection() {
	return pool;
}