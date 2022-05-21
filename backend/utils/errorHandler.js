class ErrorHandler extends Error{
    constructor(message, statusCodes ){
     super(message)
     this.statusCodes = statusCodes;
     Error.captureStackTrace(this, this.constructor, )

    }
} 

module.exports = ErrorHandler