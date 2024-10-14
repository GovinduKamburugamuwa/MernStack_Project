//require dotenv
require('dotenv').config()

//require express
const express = require('express')

//require mongoose
const mongoose = require('mongoose')

//call express function
const app=express()

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

//conncet to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>
    {
        app.listen(process.env.PORT,()=>
        {
            console.log('connecting to db & Listening to port',process.env.PORT)
        })
    })
.catch((err)=>
{
    console.log('error occur')
})
//making get request
app.use('/api/workoutes',workRoutes)

