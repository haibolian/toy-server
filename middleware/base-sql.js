const mw = (req, res, next) => {
  req.sqls = {
    query_userInfo_by_username: 'select * from users where username=?',
    
  }
  next()
}

module.exports = mw