const ErrorHandler = require("../utils/errorHandler")


module.exports = ErrorHandler = ( err, req, res , next ) => {
    err.stateCodes = err.stateCodes || 500;
    err.message = err.message  || "internal server error";
    res.status(err.stateCodes).json ( {
        success: false,
        error: err.stack
    }) 
}