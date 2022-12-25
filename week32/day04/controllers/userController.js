const userModels = require('../models/userModels')
const getUsers = async (req,res) => {
    const {name} = req.query;

    const conditions = {};

    if(name){
        conditions.name = name;
    }

    try {
        const users = await userModels.find(conditions)
        res.status(200).send({status: 'success', users})
    } catch (error) {
        console.log('Error fetching users from DB');
    }
}

const getHome = async (req,res) => {
    res.status(200).render('index')

}

const getUsersByID = async(req,res) => {
    const {userID} = req.params

    try {
        const user = await userModels.findById(userID)
        if(user) {
            res.status(200).send({status: 'success', user})
        } else {
            res.status(404).send({status: 'error', msg: "User Not Found"})
        }
    } catch (error) {
        console.log('Error fetching from DB');
        res.status(500).send({status: 'error', msg: 'Error fetching user from DB'})
    }
}

const getGallery = (req,res) =>{
    res.render('gallery');
}
const getAbout = (req,res) =>{
    res.render('about');
}
const getContact = (req,res) =>{
    res.render('contact');
}

module.exports = {
    getUsers,
    getUsersByID,
    getGallery,
    getAbout,
    getContact,
    getHome
}

