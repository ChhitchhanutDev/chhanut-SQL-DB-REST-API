import mysql from 'mysql2'

// 1. Configure the connection
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test-node_db',
  port: 3307
});

// 2. Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database!');
});

