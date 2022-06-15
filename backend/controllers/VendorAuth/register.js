const bcrypt = require("bcrypt");
const VendorRegister = require("../../models/vendorRegisterModel");


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


module.exports = signup;