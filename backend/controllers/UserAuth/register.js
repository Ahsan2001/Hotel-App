const bcrypt = require("bcrypt");
const Register = require("../../models/userRegisterModel");


const signup = async (req, res) => {
    const { name, phone, email, password } = req.body;

    if (!name || !phone || !email || !password ) {
        res.send({ message: "please Put All the Fields" })
    }
    const passHashKarhaHoon = await bcrypt.hash(password, 10)
    const userObj = {
        ...req.body,
        password: passHashKarhaHoon,

    };
    Register.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error)
        }
        else if (user) {
            res.send({ message: "email is already registered" })
        } else {
            Register.create(userObj, (err, _) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ 
                        status: true,
                        message: "hogya ja moj kar" })
                }
            })
        }
    })
}


module.exports = signup;