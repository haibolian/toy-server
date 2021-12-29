const db = require(process.cwd() + '/db')

async function fn(req,res){

  const result = await db.query(req.sqls.query_userInfo_by_username, req.query.username)
  if(result.length){
    res.rs(true, null, result[0])
  }else{
    res.rs(false, '未查到该用户的信息，请检查 username 是否正确')
  }
}

module.exports = {
  method: 'get',
  fn
}