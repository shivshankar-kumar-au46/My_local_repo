const TaskModel = require('../model/taskModel')

const getTask = async (req, res) => {

  try {
    const task = await TaskModel.find()
    res.status(200).send({status: 'success', task})
  } catch (error) {
    console.log("Error fetching task from DB")
    res.status(500).send({status: 'error', msg: "Error fetching task from DB"})
  }
}

const getTaskByID = async(req, res) => {

  const {taskID} = req.params 
  console.log(taskID)

  try {
    const task = await TaskModel.findById(restroID)
    if(restro) {
      res.status(200).send({status: 'success', task})
    } else {
      res.status(404).send({status: 'error', msg: "task Not found"})
    }
  } catch (error) {
    console.log("Error fetching restro from DB")
    res.status(500).send({status: 'error', msg: "Error fetching task from DB"})
  }
}

const postTask = async (req, res) => {

  const taskData = req.body

  //Validations
  try {
    const data = await TaskModel.create(taskData)
    console.log(data)
    res.status(201).send({status: 'succes', msg: 'Restro Inserted successfully', task: data})
  } catch (error) {
    console.log("Error inserting task in DB")
    res.status(500).send({status: 'error', msg: "Error inserting task in DB", error})
  }
}

const updateTaskByID = async (req, res) => {
  const {taskID} = req.params 
  const updatedtaskData = req.body

  try {
    const updatedRestro = await TaskModel.findByIdAndUpdate(taskID, updatedtaskData, {runValidators: true, new: true})
    res.status(200).send({status: 'succes', msg: 'restro updated successfully', restro: updatedRestro})
  } catch (error) {
    console.log("Error updating task in DB")
    res.status(500).send({status: 'error', msg: "Error updating task in DB", error})
  }
}


const deleteTask = async(req, res) => {
  const {taskID} = req.params 
  try {
    await TaskModel.findByIdAndDelete(taskID)
    res.status(201).send({status: 'succes', msg: 'task deleted successfully'})
  } catch (error) {
    console.log("Error deleting task in DB")
    res.status(500).send({status: 'error', msg: "Error deleting task in D"})
  }
}

module.exports = {
    getTask,
    getTaskByID,
    postTask,
    updateTaskByID,
    deleteTask
}