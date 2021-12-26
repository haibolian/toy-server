const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'haibolian',
  database: 'user_info'
})

module.exports = db
