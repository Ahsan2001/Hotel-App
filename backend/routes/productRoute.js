const express = require("express");
const getAllProduct = require("../controllers/productControllers");

const router = express.Router();



router.route("/products").get(getAllProduct)




module.exports = router;