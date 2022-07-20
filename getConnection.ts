const mysql = require("mysql");

const getConnection = () => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });

  if (con) {
    console.log("Connected to database");
  }
  return con;
};

module.exports = getConnection;
