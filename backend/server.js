const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const userRoutes = require('./routes/user')
 require('colors');
connectDB()

const app = express()

app.use(express.json());
// app.use(express.urlencoded({ extended:true}))


app.get('/',(req,res)=>{
    res.send('api running')
})
 
app.use('/api/user',userRoutes)

const port = process.env.PORT

app.listen(port,console.log(`server started on ${port}`.yellow.bold))