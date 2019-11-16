// const Joi = require('@hapi/joi')
// const jwt = require('jsonwebtoken')
// const bcryptjs = require('bcryptjs')
// const Op = require('sequelize').Op
// const admin = require('~services/firebase-admin')

// const User = require('~models/User')
// const Interest = require('~models/Interest')
// const INITIAL_PERMISSIONS = require('../database/INITIAL_PERMISSIONS')
// const PERMISSIONS = require('~PERMISSIONS')

// const me = async (req, res) => {
//     let ataAmi = await User.findOne({
//         where: { id: req.user.id },
//         include: [Interest],
//     })
//     res.json(ataAmi)
// }

const loginController = (req, res) => {
    res.json(req.body)
}

module.exports = {
    loginController,
}
