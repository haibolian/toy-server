const express = require('express')
const content = require(process.cwd() + '/utils/content')

const router = express.Router()
const interfaceList = content(__dirname)


interfaceList.forEach(inter => {
  if(inter.path === __filename) return
  const { result } = inter
  router[result.method] && router[result.method](result.path || `/${inter.name}`, result.fn)
})

module.exports = router
