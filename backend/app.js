const express = require("express");
const app = express();

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());



const hotelRoute = require("./routes/hotelRoute");
const UserAuth = require("./routes/userAuthRoute");
const VendorAuth = require("./routes/vendorAuthRoute");





app.use("/api/v1", hotelRoute)
app.use("/api/v1", UserAuth)
app.use("/api/v1", VendorAuth)





module.exports = app;