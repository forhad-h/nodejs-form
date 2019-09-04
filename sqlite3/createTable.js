const db = require('./db')

module.exports = tableName => {
  return new Promise((resolve, rejecct) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS ${tableName}(
      title text,
      description text,
      file_path text
    )`,
      err => {
        if (err) rejecct(err)
        resolve(true)
      }
    )
  })
}
