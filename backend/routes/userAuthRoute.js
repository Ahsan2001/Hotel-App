const express = require("express");
const login  = require("../controllers/UserAuth/login");
const signup  = require("../controllers/UserAuth/register");
const booking  = require("../controllers/bookingControllers");



const router = express.Router();


router.route("/login").post(login)
router.route("/signup").post(signup)
router.route("/booking").post(booking)




module.exports = router;