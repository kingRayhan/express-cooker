const router = require('express').Router()

const catchErrors = require('~errorHandlers/catchErrors')
// const { UPDATE_PROFILE, ADMIN, UPDATE_PERMISSIONS } = require('~PERMISSIONS')

const {
    registerController,
    loginController,
    settingsController,
} = require('~controllers/AuthController')
// const isAuthenticated = require('~middlewares/isAuthenticated')
// const hasPermission = require('~middlewares/hasPermission')

// router.post('/login/:token', catchErrors(authByFirebase))

router.get('/login', (req, res) => {
    res.render('auth/login')
})
router.get('/register', (req, res) => {
    res.render('auth/register')
})
router.get('/settings', (req, res) => {
    let { name, email } = req.session.user
    res.render('auth/settings', { name, email })
})

router.post('/login', catchErrors(loginController))
router.post('/register', catchErrors(registerController))
router.post('/settings', catchErrors(settingsController))

router.post('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/login')
})

// router.post(
//     '/update-permissions/:userId',
//     catchErrors(isAuthenticated),
//     hasPermission([ADMIN, UPDATE_PERMISSIONS]),
//     catchErrors(updatePermissions)
// )

// router.post('/me', catchErrors(isAuthenticated), catchErrors(me))
// router.get('/profile/:userId', catchErrors(profile))

module.exports = router
