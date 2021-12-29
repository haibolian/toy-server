function fn(req,res){
  res.send('asdasd')
}

module.exports = {
  method: 'post',
  path: '/login',
  fn
}