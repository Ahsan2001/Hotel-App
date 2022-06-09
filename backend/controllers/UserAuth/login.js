const Register = require("../../models/userRegisterModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send({ message: "Input Fields Error" })
    }
    Register.findOne({ email: email }, async (error, user) => {
        if (error) {
            res.send(error)
        }
        else if (user) {
            await bcrypt.compare(password, user.password)
                .then((password) => {
                    if (password) {

                        const token = jwt.sign(
                            {
                                _id: user._id,
                            },
                            "tokenSecret"
                        );
                        console.log(token, "token");
                        res.cookie("token", token, {
                            httpOnly: true,
                            // maxAge :
                        });
                        res.send({
                            status: true,
                            message: "user successfully login", data: user });
                    }
                    else {
                        res.send({ 
                            status: false,
                            message: "password sahi nhi hai" })
                    }
                })
                .catch((err) => { res.send(err) });
        }
        else {
            res.send({ message: "credentials sahi dalo" })
        }
    })
}


module.exports = login;