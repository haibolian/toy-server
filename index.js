const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./router/user')

const app = express()

app.use(bodyParser.json())

app.use('/user', userRoute)

app.listen(3000, ()=>{
  console.log('server is running at 3000 port');
})
