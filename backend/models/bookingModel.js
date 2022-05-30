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

        password: {
            type: String,
            required: [true, "Please Enter password"],
            select: false,

        },

        cnic: {            
            type: String,
            required: [true, "Please Enter cnic "],
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


const UserModel = mongoose.model("User", User);
module.exports = UserModel;
