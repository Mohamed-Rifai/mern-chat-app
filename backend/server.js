const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

app.get('/',(req,res)=>{
    res.send('api runnign')
})
 
app.get('/api/chats',(req,res)=>{
    res.send('alpoliiiii')
})

const port = process.env.PORT

app.listen(port,console.log(`server started on ${port}`))