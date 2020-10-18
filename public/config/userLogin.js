const connection = require("./connection.js")

var userLogin = {
    returnAll: function (fn) {
        connection.query("SELECT * FROM login", function (err, res) {
            if (err) throw err;
            fn(res)
        })
    }
}

module.exports = userLogin;