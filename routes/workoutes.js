const express = require('express')

const router = express.Router()
//GET request
router.get('/',(req,res)=>
{
    res.json({mssg:'GET request'})
})

//GET single request
router.get('/:id',(req,res)=>
{
    res.json({mssg:'GET a single request'})
})

// POST a request
router.post('/',(req,res)=>
{
    res.json({mssg:'POST request'})
})

//DELETE a single request
router.delete('/:id',(req,res)=>
{
    res.json({mssg:'DELETE a single request'})
})

//UPDATE a single request
router.patch('/:id',(req,res)=>
{
    res.json({mssg:'Update a single request'})
})

module.exports = router