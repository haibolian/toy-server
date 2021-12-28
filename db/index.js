const mysql = require('mysql')
const util = require('util')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'haibolian',
  database: 'users'
})

db.query = util.promisify(db.query)

module.exports = db
