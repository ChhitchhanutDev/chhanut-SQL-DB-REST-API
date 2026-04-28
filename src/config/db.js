import mysql from 'mysql2/promise'

// 1. Configure the connection
export const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test-node_db',
  port: 3307
});

// 2. Connect to the database
console.log('Connected to MySQL database!');

