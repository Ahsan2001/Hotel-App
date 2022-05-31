const Hotel = require("../models/hotelModel");
const ApiFeatures = require("../utils/apiFeatures");



// Admin create only 
 const createRoom = (req, res) => {
     Hotel.create(req.body, (err, data) => {
        if (err) {
            res.send("error", err);
        } else {
            res.send(data);
        }
    });
};

// Admin Update only 
const updateRoom = async (req, res , next) => {

    let hotel = await Hotel.findById(req.params.id)

    if (!hotel) {
        res.send({ message: "hotel not found"})
    }
    hotel = await Hotel.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    res.send(hotel)
};

// Admin Delete only 
const deleteRoom = async (req, res ,next ) => {

    let hotel = await Product.findById(req.params.id)
    if (!hotel) {
        res.send({ message: "hotel not found"})
    }

    await Product.deleteOne();
    res.send({ message: "hotel deleted successfully"})

};



const getAllRoom = async (req, res) =>{
    const apiFeatures = new ApiFeatures(Hotel.find(),req.query).search().filter()
    const hotels = await apiFeatures.query
    res.send({ hotels })
}

const detailRoom = async (req, res ,next ) => {
    let hotel = await Hotel.findById(req.params.id)
    if(!hotel) {
        res.send({message: "hotel not found"})
    }
    res.send( hotel )
};






module.exports = { getAllRoom,  createRoom , updateRoom ,deleteRoom ,detailRoom}