let token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IjVkY2U3ZTQxYWRkMTIxYjg2ZWQ0MDRiODRkYTc1NzM5NDY3ZWQyYmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC1jNWRmYSIsImF1ZCI6ImF1dGgtYzVkZmEiLCJhdXRoX3RpbWUiOjE1NzI1ODE3NzksInVzZXJfaWQiOiJtRnVld3QweUhYaEhZa3RVMVV3a3pyVDdvQW4yIiwic3ViIjoibUZ1ZXd0MHlIWGhIWWt0VTFVd2t6clQ3b0FuMiIsImlhdCI6MTU3MjU4MTc3OSwiZXhwIjoxNTcyNTg1Mzc5LCJwaG9uZV9udW1iZXIiOiIrODgwMTgzNjk4MDc2MCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzg4MDE4MzY5ODA3NjAiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwaG9uZSJ9fQ.fGKSCcz7n1YllVTnNImVKRWCV5xvLZwaeDX0qw_OQOO2-mEh26xbbPu4_vm22VN6VuYjLxLtedBt47m5kLTxG2k2Drj7pGDcR_g5BVFTw1XCcITvlZowLWy_tFlpIBXG16UY7GhY4fnverTbCl8SgPXzoW6R7GJEmnZes_615axxAnV7rgar906Ehm-CiTvqx6f7ScXNG_8LNwY9nDzEHoyqdra5s3B3uvAaAuOFt3ywwR1khFCfMZ36Cqe5irYhA1SvurYhVDf_v-g8bp8QMOsgec1a1u_3uzeJBv2595dfCDcj-BNcoVr5Jkhn_kemIE2EBwkwL5Lwyfjd6IaJng`

admin.initializeApp({
    credential: admin.credential.cert(require('./firebase-admin-keys.json')),
})

admin
    .auth()
    .verifyIdToken(token)
    .then(function(decodedToken) {
        console.log(JSON.stringify(decodedToken, undefined, 4))
    })
    .catch(function(error) {
        console.log(error)
    })
