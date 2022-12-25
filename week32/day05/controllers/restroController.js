const RestroModel = require('../models/restroModel')

const getRestro = async (req, res) => {

  const {name} = req.query
  console.log(name)

  const conditions = {}


  if(name) {
    conditions.name = name
  }
  try {
    const restro = await RestroModel.find(conditions)
    res.status(200).send({status: 'success', restro})
  } catch (error) {
    console.log("Error fetching restro from DB")
    res.status(500).send({status: 'error', msg: "Error fetching restro from DB"})
  }
}

const getrestroByID = async(req, res) => {

  const {restroID} = req.params 
  console.log(restroID)

  try {
    const restro = await RestroModel.findById(restroID)
    if(restro) {
      res.status(200).send({status: 'success', restro})
    } else {
      res.status(404).send({status: 'error', msg: "Restro Not found"})
    }
  } catch (error) {
    console.log("Error fetching restro from DB")
    res.status(500).send({status: 'error', msg: "Error fetching restro from DB"})
  }
}

const postRestro = async (req, res) => {

  const restroData = req.body

  //Validations
  try {
    const data = await RestroModel.create(restroData)
    console.log(data)
    res.status(201).send({status: 'succes', msg: 'Restro Inserted successfully', restro: data})
  } catch (error) {
    console.log("Error inserting restro in DB")
    res.status(500).send({status: 'error', msg: "Error inserting restro in DB", error})
  }
}

const updateRestroById = async (req, res) => {
  const {restroID} = req.params 
  const updatedRestroData = req.body

  try {
    const updatedRestro = await RestroModel.findByIdAndUpdate(restroID, updatedRestroData, {runValidators: true, new: true})
    res.status(200).send({status: 'succes', msg: 'restro updated successfully', restro: updatedRestro})
  } catch (error) {
    console.log("Error updating restro in DB")
    res.status(500).send({status: 'error', msg: "Error updating restro in DB", error})
  }
}


const deleteRestroByID = async(req, res) => {
  const {restroID} = req.params //{ restroID: '639b4bfaf5b417f9399c0f3e' }
  try {
    await RestroModel.findByIdAndDelete(restroID)
    res.status(201).send({status: 'succes', msg: 'restro deleted successfully'})
  } catch (error) {
    console.log("Error deleting restro in DB")
    res.status(500).send({status: 'error', msg: "Error deleting restro in D"})
  }
}

module.exports = {
    getRestro,
    getrestroByID,
  postRestro,
  updateRestroById,
  deleteRestroByID
}