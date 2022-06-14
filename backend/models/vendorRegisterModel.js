const mongoose = require("mongoose");

const vendorRegister = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        maxlength: 11,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    cnic: {
        type: Number,
        required: true
    },


    password: {
        type: String,
        required: true
    },




})


const VendorRegister = mongoose.model("vendorRegister", vendorRegister)
module.exports = VendorRegister