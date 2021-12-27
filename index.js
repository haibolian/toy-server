const express = require('express')
const userRoute = require('./router/user')

const app = express()
app.use('/user', userRoute)

app.listen(3000, ()=>{
  console.log('server is running at 3000 port');
})
