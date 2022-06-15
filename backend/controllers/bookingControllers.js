const catchAsynError = require("../middleware/catchAsynError");
const Booking = require("../models/bookingModel");
const ErrorHandler = require("../utils/errorHandler");


const booking = catchAsynError(async (req, res) => {
    const { name, phone, email, address, cnic , noOfPerson } = req.body;
    if ( !name || !phone || !email || !address || !cnic || !noOfPerson ) {
        res.send({ message: "please Put All the Fields" })
    }
    const userObj = {
        ...req.body,
    };
    Booking.create(userObj, (err, _) => {
        if (err) {
            res.send(
                {
                    err,
                    status: false
                }
                
                )
        }
        else {
            res.send({ 
                status: true,
                message: "Submmitedd data " })
        }
    })
}
)

const getAllBooking = catchAsynError(async (req, res) => {
    const getBooks = Booking.find()
    const resPonSe = await getBooks

    if (!resPonSe) {
        return next(new ErrorHandler('Booking not Found'))
    }
    res.send(
        resPonSe  
    )
}
)




module.exports = { booking, getAllBooking }; 