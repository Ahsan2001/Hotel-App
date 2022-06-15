const express = require("express");
const login  = require("../controllers/VendorAuth/login");
const { signup, getAllVendor, deleteVendor } = require("../controllers/VendorAuth/register");



const router = express.Router();


router.route("/VendorLogin").post(login)


router.route("/VendorSignup").post(signup)
router.route("/VendorSignup").get(getAllVendor)

// router.route("/VendorSignup/:id").delete(deleteVendor)





module.exports = router;