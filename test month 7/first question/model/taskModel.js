const mongoose  = require('mongoose')
const {Schema} = require('mongoose')

const taskSchema = new Schema({
    task:{
        type:String
    },
    postedOn:{
        type:Number
    },
    taskStatus:{
        type:String
    }

})

//Map mongodb collection to the schema above. .model will return a obj using which u can perform all db operations
const TaskModel = mongoose.model('restaurant', taskSchema)

module.exports = TaskModel