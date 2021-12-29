function fn(req,res){
  res.send('getAccountInfo')
}

module.exports = {
  method: 'get',
  path: '/getAccountInfo',
  fn
}