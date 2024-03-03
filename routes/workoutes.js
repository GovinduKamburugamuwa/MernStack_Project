const express = require('express')
const {
    getWorkouts,
    getWorkout,
    creatWorkout
} = require('../Controller/workoutController')

const router = express.Router()

//GET request
router.get('/',getWorkouts)

//GET single request
router.get('/:id',getWorkout)

// POST a request
router.post('/',creatWorkout)

//DELETE a single request
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a single request' })
})

//UPDATE a single request
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update a single request' })
})

module.exports = router