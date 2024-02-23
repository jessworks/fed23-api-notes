const mysql = require("mysql2");

connection = mysql.createConnection( {
    host: "localhost",
    port: "3306",
    user: "docs",
    password: "docs",
    database: "docs"
})

module.exports = connection;