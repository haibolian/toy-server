const path = require('path')
const express = require('express')
const content = require(process.cwd() + '/utils/content')

const router = express.Router()
const interfaceList = content(path.join(__dirname, 'interface'))


interfaceList.forEach(inter => {
  const { result } = inter
  router[result.method] && router[result.method](result.path || `/${inter.name}`, result.fn)
})

module.exports = router
