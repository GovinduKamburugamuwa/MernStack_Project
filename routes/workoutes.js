const express = require('express')
const {
    getWorkouts,
    getWorkout,
    creatWorkout,
    deleteWorkout,
    updateWorkout
} = require('../Controller/workoutController')

const router = express.Router()

//GET request
router.get('/',getWorkouts)

//GET single request
router.get('/:id',getWorkout)

// POST a request
router.post('/',creatWorkout)

//DELETE a single request
router.delete('/:id',deleteWorkout)

//UPDATE a single request
router.patch('/:id',updateWorkout)

module.exports = router