const express = require("express");
const app = express();

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const product = require("./routes/productRoute");
app.use("/api/v1", product)


module.exports = app;