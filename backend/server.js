const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const userRoutes = require('./routes/user')
const {notFound,errorHandler} = require('./middlewares/errorMiddleware')
require('dotenv').config()
require('colors');
connectDB()

const app = express()

app.use(express.json());
// app.use(express.urlencoded({ extended:true}))
//logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get('/',(req,res)=>{
    res.send('api running')
})
 
app.use('/api/user',userRoutes)


app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT

app.listen(port,console.log(`server started on ${port}`.yellow.bold))