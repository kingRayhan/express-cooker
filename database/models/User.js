const Sequelize = require('sequelize')
const db = require('~db')

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        unique: {
            msg: 'Email already in use',
        },
        validate: {
            isEmail: {
                msg: 'Invalid email address',
            },
        },
    },
    password: {
        type: Sequelize.STRING,
    },
})

module.exports = User
