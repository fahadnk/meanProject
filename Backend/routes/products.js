const router = require("express").Router();
const verifyToken = require("./verifyAuthToken");
const Products = require("../model/products-model");

// Add new Products
router.post("/", verifyToken, async (req, res) => {
    const products = new Products({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images
    });

    try {
        const savedProduct = await products.save();
        res.send(savedProduct);
    } catch (error) {
        res.status(400).send(error);
    };
});

// getting all Products
router.get("/", verifyToken, async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        res.json({message: error});
    }
});

// get single Product
router.get("/:productId", verifyToken, async (req, res) => {
    try {
        const product = await Products.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.json({message: error});
    }
});

// update single Product
router.put("/:productId", verifyToken, async (req, res) => {
    try {
        const updatedProduct= {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            discountPercentage: req.body.discountPercentage,
            rating: req.body.rating,
            stock: req.body.stock,
            brand: req.body.brand,
            category: req.body.category,
            thumbnail: req.body.thumbnail,
            images: req.body.images
        }
        const product = await Products.findByIdAndUpdate({_id: req.params.productId}, updatedProduct);
        res.json(product);
    } catch (error) {
        res.json({message: error});
    }
});

// delete single Product
router.delete("/:productId", verifyToken, async(req, res) => {
    try {
        const removeProduct = await Products.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;