const express = require('express')
var session = require('express-session')
var cookieParser = require('cookie-parser')
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
 * Connect Flash
 */
app.use(cookieParser('secret'))
app.use(
    session({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: false,
    })
)
app.use(require('connect-flash')())

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

app.use(function(req, res, next) {
    res.locals.flashes = req.flash()
    res.locals.user = req.session.user
    res.locals.title = process.env.APP_NAME
    res.locals.icon = require('~utils/svgIcon')
    next()
})

/**
 * ---------------------------------------
 * Routers
 * ---------------------------------------
 */

app.get('/', require('~middlewares/isAuthenticated'), (req, res) => {
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
