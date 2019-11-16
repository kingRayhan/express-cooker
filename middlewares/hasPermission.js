const errorMsg = require('~errorHandlers/errorMsg')

const hasEnoughPermission = permissionsNeeded => {
    return async (request, response, next) => {
        let user = request.user

        let hasPermission = Boolean(
            user.permissions.filter(permissionHave =>
                permissionsNeeded.includes(permissionHave)
            ).length
        )

        if (process.env.NODE_ENV == 'development') {
            if (hasPermission) next()
            else {
                let msg = `Permission need: ${JSON.stringify(
                    permissionsNeeded
                )} but you have [${user.permissions}]`
                response
                    .status(401)
                    .json(errorMsg('PermissionDenied', 401, undefined, msg))
            }
        } else {
            if (hasPermission) next()
            else
                response
                    .status(401)
                    .json(
                        errorMsg(
                            'PermissionDenied',
                            401,
                            undefined,
                            'Permission Denied'
                        )
                    )
        }
    }
}
module.exports = hasEnoughPermission
