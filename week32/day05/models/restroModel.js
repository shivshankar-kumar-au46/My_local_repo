const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const taskSchema = new Schema({
    task:String,
    postedOn:Date,
    taskStatus:String

})

//Map mongodb collection to the schema above. .model will return a obj using which u can perform all db operations
const TaskModel = mongoose.model('restaurant', taskSchema)

module.exports = TaskModel