const admin = require('firebase-admin')
admin.initializeApp({
    credential: admin.credential.cert(require('~keys/firebase.json')),
})

module.exports = admin
