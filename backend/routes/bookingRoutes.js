const express = require("express");
const router = express.Router();


const { booking, getAllBooking }  = require("../controllers/bookingControllers");


router.route("/booking").post(booking).get(getAllBooking)


module.exports = router;