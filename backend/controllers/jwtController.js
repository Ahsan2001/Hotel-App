const Register = require("../models/userRegisterModel");


const product = (req, res) => {
    console.log("body", req.body);
    res.send("api hit");
};



const getProduct =  (req, res) => {
    console.log(req.body.decoded._id, "userID");
    const userId = req.body.decoded._id;
    Register.findById(userId, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
};



module.exports = { product, getProduct}