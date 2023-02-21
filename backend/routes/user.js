const express = require('express')
const { registerUser, authUser, allUsers } = require('../controller/userController')

const router = express.Router()


router.route('/').post(registerUser).get(allUsers)
router.post('/login',authUser)

module.exports = router      