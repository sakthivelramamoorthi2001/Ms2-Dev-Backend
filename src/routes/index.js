const express = require('express')
const router = express.Router()
const loginRoutes = require('./login')

const OpeningRoutes = [ {

    path: '/login',
    routes: loginRoutes
}]

OpeningRoutes.forEach(item => {
    router.use(item.path, item.routes)
})


module.exports = router

