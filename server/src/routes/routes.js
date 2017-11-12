const router = require('express-promise-router')()
const GroupController = require('./../controllers/GroupController')
const AuthController = require('./../controllers/AuthController')

router.route('/groups').get(GroupController.getGroups)

router.route('/user/signUp').post(AuthController.signUp)
router.route('/user/signIn').post(AuthController.signIn)

module.exports = router
