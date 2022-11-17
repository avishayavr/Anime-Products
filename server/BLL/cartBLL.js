const cartModel = require("../models/cartModel");

// function for getting data
exports.getAllData = async () => {
  return await cartModel.find({});
};

// function to getting data by id
exports.getDataById = async (id) => {
  return await cartModel.findById(id);
};

// function to create item
exports.createProduct = async (obj) => {
  try {
    const newProduct = new cartModel({
      productId:obj.id,
      title: obj.title,
      price: obj.price,
      quantity: obj.quantity,
      image: obj.image,
    });

    await newProduct.save();
    return "created";
  } catch (error) {
    return `${error}`;
  }
};

// function to update item
exports.updateProduct = async (id, obj) => {
  try {
    await cartModel.findByIdAndUpdate(id, obj);
    return "product updated";
  } catch (error) {
    return `${error}`;
  }
};

// function to delete product
exports.deleteProduct = async (id) => {
  try {
    await cartModel.findByIdAndDelete(id);
    return "deleted";
  } catch (error) {
    return `${error}`;
  }
};
