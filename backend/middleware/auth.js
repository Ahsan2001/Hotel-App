const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
    const token = req.cookies.token;

    jwt.verify(token, "tokenSecret", function (err, decoded) {
        req.body.decoded = decoded;
        if (!err) {
            next();
        } else {
            res.json({ message: "UnAuth" });
        }
    });
};

module.exports = authMiddleWare;