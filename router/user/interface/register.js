function fn(req,res){
  res.send('OK大点的')
}

module.exports = {
  method: 'post',
  fn
}
