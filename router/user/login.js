const db = require( process.cwd() + '/db')
const sqls = {
  query_userInfo_by_username: 'select * from users where username=?'
}
async function fn(req,res){
  const { username, password } = req.body
  const result = await db.query(sqls.query_userInfo_by_username, username)

  if(result.length) {
    const isEqual = req.compare(password ,result[0].password)
    isEqual ? handleLogin(res) : res.rs(false, '密码输入错误')
  }else{
    res.rs(false, '该用户不存在')
  }
}

function handleLogin(res){
  res.rs(true, null ,'登录成功')
}

module.exports = {
  method: 'post',
  path: '/login',
  fn
}