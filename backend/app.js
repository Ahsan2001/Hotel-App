const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
const cors = require('cors');

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));


const hotelRoute = require("./routes/hotelRoute");
const BookingRoute = require("./routes/bookingRoutes");
const UserAuth = require("./routes/userAuthRoute");
const VendorAuth = require("./routes/vendorAuthRoute");


const jwt = require("./routes/jwtRoutes");


app.use("/api/v1", hotelRoute)
app.use("/api/v1", UserAuth)
app.use("/api/v1", VendorAuth)
app.use("/api/v1", BookingRoute)
app.use("/api/v1", jwt)





module.exports = app;