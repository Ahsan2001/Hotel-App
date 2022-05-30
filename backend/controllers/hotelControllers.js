const Product = require("../models/hotelModel");
const ApiFeatures = require("../utils/apiFeatures");



// Admin create only 
 const createRoom = (req, res) => {
    Product.create(req.body, (err, data) => {
        if (err) {
            res.send("error", err);
        } else {
            res.send(data);
        }
    });
};

// Admin Update only 
const updateRoom = async (req, res , next) => {

    let product = await Product.findById(req.params.id)

    if(!product) {
        res.send({message: "product not found"})
    }
    product = await Product.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    res.send(product)
};

// Admin Delete only 
const deleteRoom = async (req, res ,next ) => {

    let product = await Product.findById(req.params.id)
    if(!product) {
        res.send({message: "product not found"})
    }

    await Product.deleteOne();
    res.send({message: "product deleted successfully"})

};



const getAllRoom = async (req, res) =>{
    const apiFeatures = new ApiFeatures (Product.find(),req.query).search().filter()
    const products = await apiFeatures.query
    res.send( { products })
}

const detailRoom = async (req, res ,next ) => {
    let product = await Product.findById(req.params.id)
    if(!product) {
        res.send({message: "product not found"})
    }
    res.send( product )
};






module.exports = { getAllRoom,  createRoom , updateRoom ,deleteRoom ,detailRoom}