const VendorRegister = require("../../models/vendorRegisterModel");
const bcrypt = require("bcrypt");

const login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send({ message: "Enter tu karo jani kuch" })
    }
    VendorRegister.findOne({ email: email }, async (error, user) => {
        if (error) {
            res.send(error)
        }
        else if (user) {
            await bcrypt.compare(password, user.password)
                .then((password) => {
                    if (password) {
                        
                        res.send({ 
                            
                            status: true,
                            message: "password sahi hai congratz haha !" })
                    }
                    else {
                        res.send({ 
                            status: false,
                            message: "password sahi nhi hai sed loif ! " })
                    }
                })
                .catch((err) => { res.send(err) });
        }
        else {
            res.send({ message: "jani login credentials sahi dalo na esay kesa hoga login" })
        }
    })
}


module.exports = login;