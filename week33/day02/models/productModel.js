const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const productSchema = new Schema({
    name:String,
    email:String,
    product_name:String,
    product_price:Number
})

const ProductModel = mongoose.model('productDetails',productSchema);

module.exports = ProductModel