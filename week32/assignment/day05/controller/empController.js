const EmplyModel = require('../model/emplyModel');


const getEmployees = async (req,res) => {

    const {name} = req.query
    console.log(name);

    const conditions = {};

    if(name) {
        conditions.name = name;
    }
    try {
        const emply = await EmplyModel.find(conditions)
        res.status(200).send({status:"success",emply})
    } catch (error) {
        console.log("Error fetching employees from DB");
        res.status(500).send({status: 'error',msg:"Error fetching restro from DB"})
    }


}
const getEmployeeByID = async (req,res) => {
    const { emplyID } = req.params

    try {
        const employee = await EmplyModel.findById(emplyID)
        if(employee) {
            res.status(200).send({status: 'success',
        employee})
        } else {
            res.status(404).send({status: 'error', msg: "Restro Not Found"})
        }
    } catch (error) {
        console.log("Error fetching restro from DB");
        res.status(500).send({status: 'Error', msg: "Error fetching employee from DB"})
    }
}
const postEmployee = async(req,res) => {

    const newEmplyData = req.body
    console.log(newEmplyData);

    try {
        const data = await EmplyModel.create(newEmplyData)
        console.log(data);
        res.status(201).send({status: 'succes', msg:'Employee Inserted successfully',emply:data})
    } catch (error) {
        console.log('Error inserting restro in DB');
        res.status(500).send({status:"Error",msg:"Error inserting employee in DB",error})
    }

}
const updateEmployeeByID = async (req,res) => {

   const { emplyID } = req.params
   const updateEmployee = req.body

   try {
    const updatedEmply = await EmplyModel.findByIdAndUpdate(emplyID, updateEmployee,{runValidators:true,new:true})
    res.status(201).send({status:'success',msg:'emply updated successfully',emply:updateEmployee})
   } catch (error) {
    console.log('Error updating emply in DB');
    res.status(500).send({status :'Error updating emply in DB',error})
   }
}
const deleteEmployeeByID = async(req,res) => {
    const {emplyID} = req.params
    
    try {
        await EmplyModel.findByIdAndDelete(emplyID)
        res.status(201).send({status:'success',msg:'emply deleted successfully'})
    } catch (error) {
        console.log('Error deleting emply in DB');
        res.status(500).send({status:"Error", msg:"Error deleting Employee in DB"})
    }
}



module.exports = {
    getEmployees,
    getEmployeeByID,
    postEmployee,
    updateEmployeeByID,
    deleteEmployeeByID
}