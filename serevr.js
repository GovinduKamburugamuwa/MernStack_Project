//require dotenv
require('dotenv').config()

//require express
const express = require('express')

//call express function
app=express()
//middleware
app.use((req,res,next)=>
{
    console.log(req.path,req.method)
    next()
})
//making get request
app.get('/',(req,res)=>
{
    res.json({mssg:'Welcome MernFirst Step,Now We listnenig for port 4000'})
})
// listening to a port
app.listen(process.env.PORT,()=>
{
    console.log('Listening to port',process.env.PORT)
})