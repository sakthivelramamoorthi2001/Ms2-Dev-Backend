const express = require('express')
const  {loginValidation}  = require('../validation/index')
const { validate } = require('../middlewares/validate')
const {loginController} = require('../controller/index')
const router  = express.Router()

router.route('/')
    .get(validate(loginValidation.login), loginController.login)



module.exports = router

