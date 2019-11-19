const Joi = require('@hapi/joi')
// const jwt = require('jsonwebtoken')
const { compare, hash } = require('bcryptjs')
// const Op = require('sequelize').Op
// const admin = require('~services/firebase-admin')

const User = require('~models/User')
// const INITIAL_PERMISSIONS = require('../database/INITIAL_PERMISSIONS')
// const PERMISSIONS = require('~PERMISSIONS')

const registerController = async (req, res) => {
    const schema = Joi.object().keys({
        name: Joi.string()
            .trim()
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(5)
            .max(10)
            .required(),
    })
    let body = req.body
    await schema.validateAsync(body, { abortEarly: false })
    body.password = await hash(req.body.password, 10)
    await User.create(body)
    req.flash('success_msg', 'Registered successfully done')
    res.redirect('/')
}

const loginController = async (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(5)
            .max(10)
            .required(),
    })
    await schema.validateAsync(req.body, { abortEarly: false })
    let user = await User.findOne({
        where: { email: req.body.email },
    })
    let isMatched = await compare(req.body.password, user.password)
    if (isMatched) {
        req.session.user = user
        res.redirect('/')
    } else {
        req.flash('error_msg', 'Passsword did not matched')
        req.redirect('back')
    }
}

const settingsController = async (req, res) => {
    const schema = Joi.object().keys({
        name: Joi.string()
            .trim()
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(5)
            .max(10),
    })
    await schema.validateAsync(req.body, { abortEarly: false })

    await User.update(req.body, {
        where: { id: req.session.user.id },
    })
    req.session.user = await User.findOne({ id: req.session.user.id })
    req.flash('success_msg', 'Profile Info updated')
    res.redirect('back')
}

module.exports = {
    registerController,
    loginController,
    settingsController,
}
