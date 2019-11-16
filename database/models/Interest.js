const Sequelize = require('sequelize')
const db = require('../database')

const Interest = db.define('interest', {
    name: Sequelize.STRING,
})

module.exports = Interest
