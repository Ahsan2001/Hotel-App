const mongoose = require("mongoose");
const validator = require("validator")


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
            validator: [validator.isEmail, "Please Enter Valid Email Address"],
            unique: true,
        },

        password: {
            type: String,
            required: [true, "Please Enter password"],
            select: false,

        },

        avatar: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },

        role: {
            type: String,
            default: "user"
        },

     
    }
);


const UserModel = mongoose.model("User", User);
module.exports = UserModel;
