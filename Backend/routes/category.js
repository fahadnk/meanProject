const router = require("express").Router();
const verifyToken = require("./verifyAuthToken");
const Category = require("../model/category-model");

// getting all categories
router.get("/", verifyToken, async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.json({message: error});
    }
});

// add new categories
router.post("/", verifyToken, async (req, res) => {
    const category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
    });

    try {
        const savedCategory = await category.save();
        res.send(savedCategory);
    } catch (error) {
        res.status(400).send(error);
    };
});

// delete single category
router.delete("/:categoryId", verifyToken, async(req, res) => {
Category.findByIdAndRemove(req.params.categoryId).then(category => {
            if(category){
                return res.status(200).json({success: true, message:"category deleted"});
            }
            else {
                return res.status(404).json({success: false, message:"Category Not Found"});
            }
        }).catch (error => {
        res.json({message: error});
    });
});

module.exports = router;