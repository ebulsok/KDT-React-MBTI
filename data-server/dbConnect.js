const mysql = require('mysql');

const password = process.env.SQL_PW;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  port: '3306',
  database: 'MyDB',
});

connection.connect();

module.exports = connection;
