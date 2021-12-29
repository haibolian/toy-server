const bcrypt = require('bcrypt')

const mw = (req, res, next) => {
  req.encrypt = bcrypt.hashSync
  req.compare = bcrypt.compareSync
  next()
}

module.exports = mw