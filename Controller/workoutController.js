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

    if(!workout){
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
const deleteWorkout = async(req,res)=>{
const {id} = req.params

if(!mongoose.Types.ObjectId.isValid(id))
{
    res.status(404).json({error:"No such id exist"})
}

const workout = await Workout.findOneAndDelete({_id:id})

if(!workout){
    res.status(404).json({error:'No such Workout exist !!'})
}
 res.status(200).json(workout)
}
//UPDATE a single Workout

const updateWorkout = async(req,res)=>{
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error:"No such id exist"})
    }
    
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
    
    if(!workout){
        res.status(404).json({error:'No such Workout exist !!'})
    }
     res.status(200).json(workout)
    }


module.exports={
    getWorkouts,
    getWorkout,
    creatWorkout,
    deleteWorkout,
    updateWorkout
}