const router = require("express").Router();
const User = require("../model/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register New User
router.post("/register", async (req, res) =>{

    const emailExist = await User.findOne({
        email: req.body.email
    });

    if(emailExist) return res.status(400).send("Email Already Exist");

    // hsahed Password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pwd, salt);

    const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword 
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser); 
    } catch (error) {
        res.status(400).send(error);
    }
});

// login User

router.post("/login", async (req, res) =>{
    // checking if user Exist
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Email not Exist!");
    // checking Password
    const validPassword = await bcrypt.compare(req.body.pwd, user.password);
    if(!validPassword) return res.status(400).send("Invalid Password!");

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header("aut-token", token).send({token: token});
});

module.exports = router;