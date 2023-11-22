const mongoose = require("mongoose");

// creating product Schema for DB
const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description: String,
    price:{
        type: Number,
        required: true
    },
    discountPercentage: Number,
    rating: Number,
    stock: {
        type: Number,
        required: true,
        min: 0,
        max:500
    },
    brand: String,
    thumbnail: {
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    images:[String]
});

module.exports = mongoose.model("Products", productsSchema);