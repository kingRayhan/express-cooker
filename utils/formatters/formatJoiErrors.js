const Joi = require('@hapi/joi')

const formatJoiErrors = (Schema, data) => {
    // const { error } = Schema.validate(data)
    // const { error } = Joi.validate(data, Schema, {
    //     abortEarly: false
    // })

    // let errors = null
    // if (error) {
    //     errors = {}
    //     error.details.map(err => (errors[err.path[0]] = err.message))
    // }

    return errors
}
module.exports = formatJoiErrors
