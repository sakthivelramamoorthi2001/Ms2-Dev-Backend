// const {loginser} = require('../service/login')

// import { strict as assert } from 'assert';
const assert = require('assert')

const login = (req, res) => {
    
    
    console.log(assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]));
      res.send("Sdfg")
}

module.exports = {
    login
}