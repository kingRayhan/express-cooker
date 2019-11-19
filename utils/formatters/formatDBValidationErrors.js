/**
 * ----------------------------------------------------------------
 * Format Errors
 * ----------------------------------------------------------------
 */

const formatDBValidationErrors = error => {
    // if (errors) {
    //     errors.map(({ message, path }) => {
    //         errorJson[path] = message
    //     })
    // }
    return error.errors.map(e => e.message)
}
// const formatDBValidationErrors = errors => {
//     // let errors = err.errors
//     let errorJson = {}
//     if (errors) {
//         errors.map(({ message, path }) => {
//             errorJson[path] = message
//         })
//     }
//     return errorJson
// }

module.exports = formatDBValidationErrors
