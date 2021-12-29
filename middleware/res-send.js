const mw = (req, res, next) => {
  res.rs = function(isSuccess, failureMessage, result = null){
    res.send({
      isSuccess,
      failureMessage,
      result
    })
  }
  next()
}

module.exports = mw