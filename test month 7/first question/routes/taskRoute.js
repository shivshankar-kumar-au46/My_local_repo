const { Router } = require('express')
const { getTask, getTaskByID, postTask,     updateTaskByID,deleteTask
 } = require('../controller/taskController')

const taskRouter = Router()

//Restro routes
taskRouter.get('/', getTask)
taskRouter.get('/:taskID', getTaskByID)

//Route level Middleware
taskRouter.post('/', postTask)
taskRouter.put('/:taskID', updateTaskByID)
taskRouter.delete('/:taskID', deleteTask)

module.exports = taskRouter