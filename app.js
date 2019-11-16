const express = require('express')

/**
 * Initialize Express application
 */
const app = express()

/**
 * Public static directory
 */
app.use(express.static('public'))

/**
 * Enable cors
 */
app.use(require('cors')())

/**
 * PUG templating engine
 */
app.set('view engine', 'pug')

/**
 * Express Logger
 */
if (process.env.NODE_ENV === 'development') app.use(require('morgan')('dev'))
/**
 * Parse request Body
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/**
 * ---------------------------------------
 * Routers
 * ---------------------------------------
 */

app.get('/', (req, res) => {
    res.render('index')
})

app.use(require('./routes/Auth'))

// Fallback router
app.all('*', (_, res) => {
    res.status(404).json({
        message: 'invalid api route',
    })
})

/**
 * Catch all unhandle exceptions from one place :D
 */
app.use(require('~errorHandlers/catchAllUnhandleErrors'))

// done! we export it so we can start the site in server.js
module.exports = app
