const express = require("express");
const login  = require("../controllers/VendorAuth/login");
const signup = require("../controllers/VendorAuth/register");



const router = express.Router();


router.route("/VendorLogin").post(login)
router.route("/VendorSignup").post(signup)




module.exports = router;