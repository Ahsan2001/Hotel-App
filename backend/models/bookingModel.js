const mongoose = require("mongoose");


const User = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter User Name"],
            minlength: [3, "Name Should have 3 Characters "]
        },
    
        email: {
            type: String,
            required: [true, "Please Enter Email Address"],
            unique: true,
        },
        cnic: {            
            type: String,
            required: [true, "Please Enter cnic "],
        },

        phone: {
            type: Number,
            required: [true, "Please Enter phone Number "],
        },


        address: {            
            type: String,
            required: [true, "Please Enter address"],
        },
        noOfPerson: {
            type: String,
            required: [true, "Please Enter noOfPerson"],
        }
    }
);


const UserModel = mongoose.model("BookingForm", User);
module.exports = UserModel;
