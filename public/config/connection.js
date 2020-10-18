var mysql = require("mysql");

db_connect = {
    host: process.env.JAWSDB_HOST || "localhost",
    port: process.env.JAWSDB_PORT || 3306,
    user: process.env.JAWSDB_USER || "root",
    password: process.env.JAWSDB_PASSWORD || "",
    database: process.env.JAWSDB_DATABASE || "burgers_db"
}

// var connection = mysql.createConnection(db_connect);

const pool = mysql.createPool(db_connect);

pool.query('select 1 + 1', (err, rows) => {
    /* */
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;