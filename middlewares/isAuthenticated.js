const isAuthenticated = async (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        req.flash('error_msg', 'You are not loggedin')
        res.redirect('/login')
    }
}

module.exports = isAuthenticated
