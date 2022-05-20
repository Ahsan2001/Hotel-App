const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: [true, "Please Enter Product Name"],
            trim: true
        },
        description: { 
            type: String,
            required: [true, "Please Enter Product Description"],
            trim: true
        },
        price: { 
            type: Number,
            required: [true, "Please Enter Product Price"],
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
            required: [true, "Please Enter Product Category"],
        },
        stock: { 
            type: Number,
            required: [true, "Please Enter Product Stock"],
            maxlength: [3, "stock cannot exceeded 3 numbers" ]
        },
        stock: { 
            type: Number,
            required: [true, "Please Enter Product Stock"],
            maxlength: [3, "stock cannot exceeded 3 numbers" ],
            default: 1
        },
        numOfReview: { 
            type: Number,
            default: 0
        },
        reviews: [
            {
                name :{
                    type: String,
                    required:true
                },
                rating :{
                    type: Number,
                    required:true
                },
                comment :{
                    type: String,
                    required:true
                },
            }
        ],
        createdAT : {
            type: Date,
            default: Date.now
        }
    }
);


const Product = mongoose.model("Product", productSchema);
module.exports = Product;

