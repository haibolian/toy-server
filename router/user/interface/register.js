const bcrypt = require('bcrypt')
const db = require(process.cwd() + '/db/index.js')
/**
 * 
 * @param {object} userInfo 
 */
function formatUserInfo(body = {}){
  const { username, password, nickname, email, user_pic } = body
  return {
    username,
    password: bcrypt.hashSync(password, 10),
    nickname,
    email,
    user_pic,
    create_at: new Date(),
  }
}

function fn(req,res){
  const userInfo = formatUserInfo(req.body)

  const sql = 'insert into users set ?';
  db.query(sql, userInfo, (err, result) => {
    if(err) return res.send(err.message || err)
    if(result.affectedRows) {
      res.send('注册成功')
    }
  })
}

module.exports = {
  method: 'post',
  fn
}
