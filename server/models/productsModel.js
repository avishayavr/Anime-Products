const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    title:String,
    price:Number,
    quantity:Number,
    image:String,
    sizes:[String]
})

const model = mongoose.model("products", productsSchema);
module.exports = model;
