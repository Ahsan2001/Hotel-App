const Booking = require("../models/bookingModel");


const booking = async (req, res) => {
    const { name, phone, email, address, cnic , noOfPerson } = req.body;

    if (!name || !phone || !email || !address || !cnic || !noOfPerson ) {
        res.send({ message: "please Put All the Fields" })
    }
    const userObj = {
        ...req.body,

    };

    Booking.create(userObj, (err, _) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message: "Submmitedd data " })
        }
    })

    
}


module.exports = booking;