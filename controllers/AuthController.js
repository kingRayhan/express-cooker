const Joi = require('@hapi/joi')
// const jwt = require('jsonwebtoken')
// const bcryptjs = require('bcryptjs')
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
    await schema.validateAsync(req.body)

    res.render('register')
}

module.exports = {
    registerController,
}
