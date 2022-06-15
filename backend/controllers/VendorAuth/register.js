const bcrypt = require("bcrypt");
const catchAsynError = require("../../middleware/catchAsynError");
const VendorRegister = require("../../models/vendorRegisterModel");
const ErrorHandler = require("../../utils/errorHandler");


// create Controller 
const signup = async (req, res) => {
    const { name, phone, email, password, address, cnic } = req.body;
    if (!name || !phone || !email || !password || !address || !cnic ) {
        res.send({ message: "please Put All the Fields" })
    }
    const passHashKarhaHoon = await bcrypt.hash(password, 10)
    const userObj = {
        ...req.body,
        password: passHashKarhaHoon,

    };
    VendorRegister.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error)
        }
        else if (user) {
            res.send({ message: "email is already registered" })
        } else {
            VendorRegister.create(userObj, (err, _) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ 
                        status: true,
                        message: "Vendor SuccessFully Created " })
                }
            })
        }
    })
}









// Admin Delete only
// const deleteVendor = catchAsynError(async (req, res, next) => {
//     let deleteThisVendor = await VendorRegister.findById(req.params.id)
//     if (!deleteThisVendor) {
//         return next(new ErrorHandler('venodr not Found'))
//     }
//     await VendorRegister.deleteOne();
//     res.send({ message: "venodr deleted successfully" })
// }
// )



const getAllVendor = catchAsynError(async (req, res) => {
    const getAll = VendorRegister.find()
    const vendors = await getAll
    res.send({
        vendors
    })
}
)




module.exports = { signup, getAllVendor };
// deleteVendor