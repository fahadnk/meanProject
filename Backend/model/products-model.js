const mongoose = require("mongoose");

// creating Schema for DB
const productsSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images:[String]
});

module.exports = mongoose.model("Products", productsSchema);