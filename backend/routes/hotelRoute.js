const express = require("express");
const router = express.Router();

const { getAllRoom, createRoom, updateRoom, deleteRoom, detailRoom } = require("../controllers/hotelControllers");


router.route("/hotel").get(getAllRoom)
router.route("/hotel/:id").get(detailRoom)



// Admin Routes 
router.route("/admin/hotel/new").post(createRoom)
router.route("/admin/hotel/:id").put(updateRoom).delete(deleteRoom)


module.exports = router;