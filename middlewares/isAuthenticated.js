const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const User = require('~models/User')
const errMsg = require('~errorHandlers/errorMsg')

const isAuthenticated = async (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization
        token = token.replace('Bearer ', '')

        if (!token)
            return res.status(401).json({
                message: 'Authentication Required',
            })

        let { userId } = await promisify(jwt.verify)(
            token,
            process.env.APP_SECRET
        )
        let user = await User.findOne({
            where: {
                id: userId,
            },
            attributes: { exclude: ['password'] },
        })

        req.user = user

        if (user) next()
    } else {
        return res
            .status(401)
            .json(
                errMsg(
                    'TOKEN_NOT_PROVIDER',
                    401,
                    undefined,
                    'JWT Token not provided'
                )
            )
    }
}

module.exports = isAuthenticated
