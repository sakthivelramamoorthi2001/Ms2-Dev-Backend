

const {cathcAsync} = require('../utils/catchAsync')
const assert = require('assert')



const login = cathcAsync((req, res) => {
    console.log(req,'asdf');    
})

module.exports = {
    login
}