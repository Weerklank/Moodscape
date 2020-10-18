const connection = require("./connection.js")

var reminders = {
    returnAll: function (fn) {
        connection.query("SELECT * FROM reminders", function (err, res) {
            if (err) throw err;
            fn(res)
        })
    },
    addEntry: function (date, time, reminder, description, on_off, fn) {
        connection.query(`INSERT INTO reminders (date, time, reminder, description, on_off) VALUES (${date},${time},${reminder},${description},${on_off})`, function (err, res) {
            if (err) throw err;
            fn(res)
        })
    },
    updateEntry: function (reminder, date, on_off, fn) {
        connection.query(`SELECT * from reminders WHERE reminder=${reminder}`, function (err, res) {
            if (err) throw err;
            connection.query(`UPDATE reminders SET date = "${date || res[0].date}", time=${time || res[0].time}, description=${res[0].description}, on_off=${on_off || res[0].on_off}WHERE reminder=${reminder}`, function (err, res) {
                if (err) throw err;
                fn(res)
            })
        })
    }
}

module.exports = reminders;