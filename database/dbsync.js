const db = require('~db')

/**
 * -------------------------------------------
 *      Models
 * -------------------------------------------
 */
const User = require('~models/User')
const Interest = require('~models/Interest')

/**
 * User's Interest
 * relation ---> many to many
 */
//
/**
 * pivot table
 *
 * Columns:
 * id
 * userId
 * interestId
 */
const UserInterest = db.define('user_interests', {})

User.belongsToMany(Interest, { through: UserInterest })
Interest.belongsToMany(User, { through: UserInterest })

let force = process.argv[process.argv.length - 1] === '--force'

db.sync({ force }).then(res => {
    if (force) {
        console.log('DB forcefully synchronized successfully')
    } else {
        console.log('DB synchronized successfully')
    }
})
