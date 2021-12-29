const express = require('express')
const middleware = require('./middleware/index')
const bodyParser = require('body-parser')
const userRoute = require('./router/user')

const app = express()

// body解析中间件
app.use(bodyParser.json())

// 安装中间件
middleware.install(app)

app.use('/user', userRoute)

app.use((err, req, res, next) => {
  if(err) res.send(err.message || err)
  next()
})

app.listen(3000, ()=>{
  console.log('server is running at 3000 port');
})
