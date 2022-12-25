const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    fav_color:String,
    fav_food:String,
    feedback:String
})

module.exports=mongoose.model('userDetails',Student);