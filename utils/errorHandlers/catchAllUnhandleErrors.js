const formatDBValidationErrors = require('~formatters/formatDBValidationErrors')
const formatJoiErrors = require('~formatters/formatJoiErrors')

// const ERROR_TYPES = {
//     VALIDATION_ERROR: 'VALIDATION_ERROR',
//     JWT_ERROR: 'JWT_ERROR',
//     SERVER_ERROR: 'SERVER_ERROR',
// }

module.exports = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        let errors = formatJoiErrors(error)
        req.flash('errors', errors)
    }

    /**
     * Sequizelize Error
     */
    if (
        error.name === 'SequelizeValidationError' ||
        error.name === 'SequelizeUniqueConstraintError'
    ) {
        let errors = formatDBValidationErrors(error)
        req.flash('errors', errors)
    }

    console.log(JSON.stringify(error, undefined, 4))

    res.redirect('back')
}
