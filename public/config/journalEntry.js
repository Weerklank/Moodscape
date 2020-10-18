const connection = require("./connection.js")

var journalEntry = {
    returnAll: function (fn) {
        connection.query("SELECT * FROM journal", function (err, res) {
            if (err) throw err;
            fn(res)
        })
    },
    addEntry: function (content, mood, fn) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        connection.query(`INSERT INTO journal (date, content, mood) VALUES (${today},${content},${mood})`, function (err, res) {
            if (err) throw err;
            fn(res)
        })
    },
    updateEntry: function (date, content, fn) {
        connection.query(`SELECT * from journal WHERE date=${date}`, function (err, res) {
            if (err) throw err;
            connection.query(`UPDATE journal SET content = "${content}", mood=${res[0].mood} WHERE date=${date}`, function (err, res) {
                if (err) throw err;
                fn(res)
            })
        })
    }
}

module.exports = journalEntry;