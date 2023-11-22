const mongoose = require("mongoose");

// creating category Schema for DB
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    icon:{
        type: String,
    },
    color:{
        type: String
    }
   
});

module.exports = mongoose.model("Category", categorySchema);