//require dotenv
require('dotenv').config()

//require express
const express = require('express')

//call express function
app=express()

//express json middleware
app.use(express.json())

// calling for the routing page
const workRoutes = require('./routes/workoutes')

//middleware
app.use((req,res,next)=>
{
    console.log(req.path,req.method)
    next()
})

//making get request
app.use('/api/workoutes',workRoutes)

// listening to a port
app.listen(process.env.PORT,()=>
{
    console.log('Listening to port',process.env.PORT)
})