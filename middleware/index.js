const content = require('../utils/content')

const middlewares = content(__dirname)

exports.install = (app) => {
  middlewares.forEach(mw => {
    if(mw.path === __filename) return
    app.use(mw.result)
  })
}