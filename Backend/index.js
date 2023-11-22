const express = require("express");
const cors = require("cors");
const app = express();

// For encapsulation Using dotenv
const dotenv = require("dotenv");
dotenv.config();

// connecting to DB
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECT);

// Import Routes
const Products = require("./routes/products");
const Categories = require("./routes/category");
const userRoutes = require("./routes/users");

// middlewares
app.use(express.json());
app.use(cors());

// Route Middle wares
app.use("/api/products", Products);
app.use("/api/categories", Categories);
app.use("/api/user", userRoutes);

app.listen(4000, () => console.log("Api Server Started"));