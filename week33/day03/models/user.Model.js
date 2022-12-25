const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  emp_name: {
    type: String,
    unique: true,
    minLength: 5,
    maxLength: 25,
  },
  job_name: {
    type: String,
    unique: false,
    minLength: 5,
    maxLength: 25,
  },
  hire_date: {
    type: Date,
    default: Date.now(),
  },
  salery: {
    type: String,
  },
});

//Map mongodb collection to the schema above. .model will return a obj using which u can perform all db operations
const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;