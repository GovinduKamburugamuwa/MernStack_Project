const express = require('express')
const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')


//GET all Workouts

const getWorkouts = async(req,res)=>
{
  const workouts = await Workout.find({}).sort({createdAt:-1})
  res.status(200).json(workouts)
}

//GET a single Workout

const getWorkout = async(req,res)=>
{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error:"No such id exist"})
    }

    const workout = await Workout.findById(id)

    if(!Workout){
        res.status(404).json({error:'No such Workout exist !!'})
    }
     res.status(200).json(workout)
}


//CREATE a Workout
const creatWorkout = async(req,res)=>
{
    const { title, rep, loads } = req.body
    try {
        const workout = await Workout.create({ title, rep, loads })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//DELETE a single Workout


//UPDATE a single Workout



module.exports={
    getWorkouts,
    getWorkout,
    creatWorkout
}