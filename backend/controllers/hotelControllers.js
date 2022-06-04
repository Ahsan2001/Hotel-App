const Hotel = require("../models/hotelModel");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler")
const catchAsynError = require("../middleware/catchAsynError");



// Admin create only
// create a new room => api/v1/admin/hotel/new 
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
// update a room => api/v1/admin/hotel/:id  
const updateRoom = catchAsynError( async (req, res , next) => {
    let hotel = await Hotel.findById(req.params.id)
    if (!hotel) {
        return next(new ErrorHandler('hotel not Found'))
    }
    hotel = await Hotel.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    res.send(hotel)
 }
)




// Admin Delete only
// delete a room => api/v1/admin/hotel/:id  
const deleteRoom = catchAsynError( async (req, res ,next ) => {
    let hotel = await Hotel.findById(req.params.id)
    if (!hotel) {
        return next(new ErrorHandler('hotel not Found'))
    }
    await Hotel.deleteOne();
    res.send({ message: "hotel deleted successfully"})
 }
)



// get all room => api/v1/hotel
const getAllRoom = catchAsynError( async (req, res) =>{
    const apiFeatures = new ApiFeatures(Hotel.find(),req.query).search().filter()
    const hotels = await apiFeatures.query
    res.send({
        counts: hotels.length, 
        hotels 
    })
 }
)


// get Single room => api/v1/hotel
const detailRoom = catchAsynError(async (req, res ,next ) => {
    let hotel = await Hotel.findById(req.params.id)
    if (!hotel) {
        return next(new ErrorHandler('hotel not Found'))
    }
    res.send( hotel )
 }
)


module.exports = { getAllRoom,  createRoom , updateRoom ,deleteRoom ,detailRoom}