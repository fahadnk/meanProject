const mongoose = require("mongoose");

// creating users Schema for DB
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);