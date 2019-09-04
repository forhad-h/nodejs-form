const db = require('./db')

module.exports = (tableName, fields) => {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(${fields})`, err => {
      if (err) rejecct(err)
      resolve(true)
    })
  })
}
