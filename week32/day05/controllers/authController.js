// const { response } = require("express");
const userModel = require("../models/userModel")
const jwt =  require('jsonwebtoken');

const SECRET_KEY = "shhhhh";




const signUp = async (req,res) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
        if(password != confirmPassword){
        res.status(400).send({status:'error',msg:'password/confirmPassword are not same'})
        }
       const newUser = await userModel.create({name,email, password})
       res.status(200).send({status:'success',user: newUser})
        
    } catch (error) {
        res.status(500).send({status:'error',error,msg:'Internal Server Error'})
    }

}
const login = (req,res) => {
    const { email, password } = req.body;
    try {
        const loggedInUser = userModel.find({ email, password},{ email:1,password:1});
        if(!loggedInUser){
            res.status(404).send({status:'error',msg:'user not found'})
        }
        if(loggedInUser.password !== password){
            res.status(400).send({status:'error',msg:'password Incorrect'})
        }

        //Generate the Token for that we have to install jsonwebtoken library
        //for generate the token we need to give three things which are headers,payload and signature
        const payload = { email }
        
        const token = jwt.sign(payload,SECRET_KEY, {algorithm:"ES256", expiresIn:"1d"})
        console.log(token)

        res.send({ status:'succes'})



    } catch (error) {
        res.status(500).send({status:'error',msg:'Internal Server error'})
        
    }

}
const logout = (req,res) => {

}

module.exports = {
    signUp,
    login,
    logout
}