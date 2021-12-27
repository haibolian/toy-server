const path = require('path')
const express = require('express')
const content = require('../../utils/content')
const router = express.Router()

const interfaceList = content(path.join(__dirname, 'interface'))

interfaceList.forEach(inter => {
  const { result } = inter
  console.log(inter);
  router[result.method] && router[result.method](result.path || `/${inter.name}`, result.fn)
})

module.exports = router
