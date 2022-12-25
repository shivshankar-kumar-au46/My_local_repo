const ProductModel = require("../models/productModel")


const getProduct = async (req,res) => {
    // const product = req.query;
    const { name, email, product_name, product_price} = req.query;
    const conditions = {};

    try {
        if(name){
            conditions.name = name;
        } else if(email){
            conditions.email = email;
        }else if(product_name){
            conditions.product_name = product_name;
        }else if(product_price){
            conditions.product_price = product_price;
        }else {
            res.status(404).send({status:'error',msg:'product not found'})
        }
    
    
       const getAllProduct = await ProductModel.find(conditions) 
       res.status(200).send({status:'success',getAllProduct})
    } catch (error) {
        res.status(404).send({status:'error',msg:'product not found'})
    }
    
}
const postProduct = async (req,res) => {
   try {
    const postProduct = req.body;
    const newProduct = await ProductModel.create(postProduct)
    res.status(200).send({status:'success',newProduct})
   } catch (error) {
    res.status(401).send({status:'error',msg:'Internal Server Error'})
   }

}
const postUser = (req,res) => {

}
const getUser = (req,res) => {

}

module.exports = {
    getProduct,
    postProduct,
    postUser,
    getUser
}