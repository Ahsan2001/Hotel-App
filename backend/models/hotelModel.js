const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: [true, "Please Enter Hotel Name"],
            trim: true
        },
        description: { 
            type: String,
            required: [true, "Please Enter Hotel Description"],
            trim: true
        },
        price: { 
            type: Number,
            required: [true, "Please Enter Hotel Price"],
            maxlength: [8, "Price cannot exceeded 8 numbers" ]
        },
        rating: { 
            type: Number,
            default: 0
        },
        images: [
            {
                public_id :{
                    type: String,
                    required:true
                },
                url :{
                    type: String,
                    required:true
                }
            }
        ],
        category: { 
            type: String,
            required: [true, "Please Enter Hotel Category"],
        },
        createdAT : {
            type: Date,
            default: Date.now
        }
    }
);


const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;

