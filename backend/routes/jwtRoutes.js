const express = require("express");
const router = express.Router();


const authMiddleWare = require("../middleware/auth");
const { product, getProduct } = require("../controllers/jwtController");


router.route("/product", authMiddleWare).post(product).get(getProduct)



module.exports = router;