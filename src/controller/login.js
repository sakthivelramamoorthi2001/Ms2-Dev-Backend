

const {cathcAsync} = require('../utils/catchAsync')
const assert = require('assert')



const login = cathcAsync((req, res) => {
    console.log('kjhgfdx');
    console.log(req);
    res.send({name:'sdv', data:'sdfg'})
})

module.exports = {
    login
}