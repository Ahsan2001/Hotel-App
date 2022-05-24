const Product = require("../models/productModal");
const ApiFeatures = require("../utils/apiFeatures");



// Admin create only 
 const createProduct = (req, res) => {
    Product.create(req.body, (err, data) => {
        if (err) {
            res.send("error", err);
        } else {
            res.send(data);
        }
    });
};

// Admin Update only 
const updateProduct = async (req, res , next) => {

    let product = await Product.findById(req.params.id)

    if(!product) {
        res.send({message: "product not found"})
    }
    product = await Product.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    res.send(product)
};

// Admin Delete only 
const deleteProduct = async (req, res ,next ) => {

    let product = await Product.findById(req.params.id)

    if(!product) {
        res.send({message: "product not found"})
    }

    await Product.deleteOne();
    res.send({message: "product deleted successfully"})

};



const getAllProduct = async (req, res) =>{
    const apiFeatures = new ApiFeatures (Product.find(),req.query).search()
    const products = await apiFeatures.query
    res.send( { products })
}

const detailProduct = async (req, res ,next ) => {
    let product = await Product.findById(req.params.id)
    if(!product) {
        res.send({message: "product not found"})
    }
    res.send( product )
};






module.exports = { getAllProduct,  createProduct , updateProduct ,deleteProduct ,detailProduct}