const mysql = require("mysql");

const getConnection = () => {
  const con = mysql.createConnection({
    host: "portafolioweb.czklrrr38xte.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "basededatos",
    database: "todos",
    port: 3306,
  });

  if (con) {
    console.log("Connected to database");
  }
  return con;
};

module.exports = getConnection;
