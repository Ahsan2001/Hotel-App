const express = require("express");
const { getAllRoom, createRoom, updateRoom, deleteRoom, detailRoom } = require("../controllers/hotelControllers");

const router = express.Router();



router.route("/hotel").get(getAllRoom)
router.route("/hotel/:id").get(detailRoom)
router.route("/hotel/new").post(createRoom)
router.route("/hotel/:id").put(updateRoom)
router.route("/hotel/:id").delete(deleteRoom)




module.exports = router;