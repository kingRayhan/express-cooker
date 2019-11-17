const formatDBValidationErrors = require('~formatters/formatDBValidationErrors')
const formatJoiErrors = require('~formatters/formatJoiErrors')
const errorMsg = require('~errorHandlers/errorMsg')
const ERROR_TYPES = {
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    JWT_ERROR: 'JWT_ERROR',
    SERVER_ERROR: 'SERVER_ERROR',
}

module.exports = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        let errors = formatJoiErrors(error)
        req.flash('errors', errors)
        next()
    }

    // let errorObject = null
    // /**
    //  * Error thrown from sequelize
    //  */
    // if (
    //     error.name === 'SequelizeValidationError' ||
    //     error.name === 'SequelizeUniqueConstraintError'
    // ) {
    //     res.status(400)
    //     errorObject = errorMsg(
    //         ERROR_TYPES.VALIDATION_ERROR,
    //         400,
    //         formatDBValidationErrors(error.errors)
    //     )
    // }
    // if (error.name === 'SequelizeConnectionError') {
    //     res.status(500)
    //     errorObject = errorMsg(
    //         ERROR_TYPES.SERVER_ERROR,
    //         500,
    //         undefined,
    //         process.env.NODE_ENV === 'development'
    //             ? error.message
    //             : 'Internal server error'
    //     )
    // }
    // if (error.message.startsWith('Firebase ID')) {
    //     res.status(500)
    //     errorObject = errorMsg(
    //         ERROR_TYPES.SERVER_ERROR,
    //         500,
    //         undefined,
    //         'Firebase access token expired'
    //     )
    // }
    // let limit = process.env.GCLOUD_STORAGE_UPLOAD_LIMIT || 5
    // if (error.name === 'MulterError') {
    //     res.status(500)
    //     errorObject = errorMsg(
    //         ERROR_TYPES.SERVER_ERROR,
    //         500,
    //         undefined,
    //         `Maximum file upload limit is ${limit}mb`
    //     )
    // }
    // /**
    //  * JWT error
    //  */
    // if (error.name === 'JsonWebTokenError') {
    //     res.status(500)
    //     errorObject = errorMsg(
    //         error.name,
    //         500,
    //         undefined,
    //         error.message,
    //         process.env.NODE_ENV === 'development'
    //             ? error.stack
    //             : console.log(error.stack)
    //     )
    // }
    // /**
    //  * Unknown errors
    //  */
    // if (!errorObject) {
    //     res.status(500)
    //     errorObject = errorMsg(
    //         process.env.NODE_ENV === 'development'
    //             ? error.name
    //             : ERROR_TYPES.SERVER_ERROR,
    //         500,
    //         undefined,
    //         process.env.NODE_ENV === 'development'
    //             ? error.message
    //             : 'Internal server error',
    //         process.env.NODE_ENV === 'development'
    //             ? error.stack
    //             : console.log(error.stack)
    //     )
    // }
    /**
     * Response error object
     */
    // res.json(errorObject)
}
