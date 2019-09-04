const sqlite3 = require('sqlite3').verbose()

module.exports = new sqlite3.Database(
  './db/nodejs-form.db',
  sqlite3.OPEN_READWRITE || sqlite3.OPEN_CREATE,
  err => {
    if (err) return console.error(err.message)
  }
)
