const db = require('./db')

module.exports = tableName => {
  db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
    title text,
    description text,
    file_path text
  )`)
}
