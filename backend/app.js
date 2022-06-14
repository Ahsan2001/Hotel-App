const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
const cors = require('cors');

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


const hotelRoute = require("./routes/hotelRoute");
const UserAuth = require("./routes/userAuthRoute");
const VendorAuth = require("./routes/vendorAuthRoute");


const jwt = require("./routes/jwtRoutes");


app.use("/api/v1", hotelRoute)
app.use("/api/v1", UserAuth)
app.use("/api/v1", VendorAuth)
app.use("/api/v1", jwt)




module.exports = app;