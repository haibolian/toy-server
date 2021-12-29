const bcrypt = require('bcrypt')
const db = require(process.cwd() + '/db/index.js')
const { user_info_validate } = require(process.cwd() + '/schema/register')

const sqls = {
  find_existent_user:'select * from users where username=?',
  register: 'insert into users set ?'
}

async function fn(req,res){
  const userInfo = formatUserInfo(req.body)
  
  // 校验是否存在用户名
  const existentUsersList = await db.query(sqls.find_existent_user, userInfo.username)
  if(existentUsersList.length) {
    res.rs(false, '用户名已存在')
    return false
  }

  // 校验表单数据
  const valid = user_info_validate(userInfo)
  if(!valid) {
    const { instancePath, message } = user_info_validate.errors[0]
    res.rs(false, `${instancePath.slice(1)} ${message}`)
    return false
  }

  // 加密
  userInfo.password = bcrypt.hashSync(userInfo.password, 10)

  // 注册
  db.query(sqls.register, userInfo, (err, result) => {
    if(err) return res.rs(false, err.message)
    if(result.affectedRows) {
      res.rs(true, null, '注册成功')
    }
  })
}


/**
 * 格式化用户信息 
 * @param {object} userInfo 
 */
function formatUserInfo(body = {}){
  const { username, password, nickname, email, user_pic } = body
  return {
    username,
    password,
    nickname,
    email,
    user_pic,
    create_at: new Date(),
  }
}

module.exports = {
  method: 'post',
  fn
}
