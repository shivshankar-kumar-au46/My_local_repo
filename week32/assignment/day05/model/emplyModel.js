const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const emplySchema = new Schema({
    employee_name:String,
    employee_email:String,
    employee_phone:Number,
    employee_salary:Number,
    employee_age:Number,
})

const EmplyModel = mongoose.model('employeeDetails',emplySchema)

module.exports = EmplyModel