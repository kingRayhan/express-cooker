const Interest = require('~models/Interest')
const Joi = require('@hapi/joi')

const interestList = async (req, res) => {
    // TODO: add key of number of people have interest on this
    let interests = await Interest.findAll()
    res.json(interests)
}
const createInterest = async (req, res) => {
    let { name } = req.body

    // Validation
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
    })
    await schema.validateAsync(req.body)

    let interest = await Interest.create({
        name,
    })
    res.json(interest)
}
const updateInterest = async (req, res) => {
    let { id } = req.params
    let body = req.body

    // Validation
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
    })
    await schema.validateAsync(body)
    // Update
    await Interest.update(body, { where: { id } })
    // fetch updated interest
    let interest = await Interest.findOne({ where: { id } })
    res.json(interest)
}
const deleteInterest = async (req, res) => {
    const schema = Joi.object({})
    await schema.validateAsync(req.body)

    let interest = await Interest.findOne({ where: { id: req.params.id } })

    await Interest.destroy({
        where: { id: req.params.id },
    })
    res.json(interest)
}

module.exports = {
    interestList,
    createInterest,
    deleteInterest,
    updateInterest,
}
