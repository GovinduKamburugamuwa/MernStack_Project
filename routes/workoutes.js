const express = require('express')
const Workout = require('../models/workoutModels')

const router = express.Router()
//GET request
router.get('/', (req, res) => {
    res.json({ mssg: 'GET request' })
})

//GET single request
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single request' })
})

// POST a request
router.post('/', async (req, res) => {
    const { title, rep, loads } = req.body
    try {
        const workout = await Workout.create({ title, rep, loads })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

//DELETE a single request
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a single request' })
})

//UPDATE a single request
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update a single request' })
})

module.exports = router