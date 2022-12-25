const mongoose  = require('mongoose');
const { Schema } = require('mongoose')

//for signUp I need to store user details into DB so that user can login

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        maxLength:25
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:4
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:4
    }
})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;