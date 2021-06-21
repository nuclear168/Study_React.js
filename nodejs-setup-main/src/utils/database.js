const dbConfig = require("../config/db.json");

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

module.exports = pool;
