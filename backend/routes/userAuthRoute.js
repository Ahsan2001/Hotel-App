const express = require("express");
const login  = require("../controllers/UserAuth/login");
const signup  = require("../controllers/UserAuth/register");



const router = express.Router();


router.route("/login").post(login)
router.route("/signup").post(signup)


module.exports = router;