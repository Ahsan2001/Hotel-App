const express = require("express");
const login  = require("../controllers/login");
const signup  = require("../controllers/register");
const booking  = require("../controllers/booking");



const router = express.Router();


router.route("/login").post(login)
router.route("/signup").post(signup)
router.route("/booking").post(booking)




module.exports = router;