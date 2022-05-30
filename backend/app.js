const express = require("express");
const app = express();

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());



const product = require("./routes/productRoute");
const auth = require("./routes/authRoute");



app.use("/api/v1", product)
app.use("/api/v1", auth)



module.exports = app;