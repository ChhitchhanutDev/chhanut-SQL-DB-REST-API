import mysql from 'mysql2/promise'


// 2. Configure the connection
export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306
});

// 2. Connect to the database
console.log('Connected to MySQL database!');

