const router = require('express').Router()

// const { catchErrors } = require('~errorHandlers/catchErrors')
// const { UPDATE_PROFILE, ADMIN, UPDATE_PERMISSIONS } = require('~PERMISSIONS')

const { loginController } = require('~controllers/AuthController')
// const isAuthenticated = require('~middlewares/isAuthenticated')
// const hasPermission = require('~middlewares/hasPermission')

// router.post('/login/:token', catchErrors(authByFirebase))

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', loginController)

router.get('/register', (req, res) => {
    res.render('register')
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
