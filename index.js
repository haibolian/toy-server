const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./router/user')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.rs = function(isSuccess, failureMessage, result = null){
    res.send({
      isSuccess,
      failureMessage,
      result
    })
  }
  next()
})

app.use('/user', userRoute)

app.use((err, req, res, next) => {
  if(err) res.send(err.message || err)
  next()
})

app.listen(3000, ()=>{
  console.log('server is running at 3000 port');
})
