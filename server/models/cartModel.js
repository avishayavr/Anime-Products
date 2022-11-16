const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    // _id:String,
    title:String,
    price:Number,
    quantity:Number,
    image:String
})

const model = mongoose.model("carts", cartSchema);
module.exports = model;
