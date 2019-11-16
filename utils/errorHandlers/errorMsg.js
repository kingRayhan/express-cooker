/**
 *
 * @param {*} type
 * @param {*} statusCode
 * @param {*} errors
 * @param {*} message
 * @param {*} stack
 */
const errorMsg = (type, statusCode, errors, message, stack) => {
    return {
        type,
        statusCode,
        errors,
        message,
        stack,
    }
}

module.exports = errorMsg
