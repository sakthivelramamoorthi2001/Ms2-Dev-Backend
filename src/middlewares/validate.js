const Joi = require('joi')
const httpStatus =  require('http-status')

const validate = (schema) => (req, res, next) => {
    console.log(Object.keys(schema));
    const key = ['params', 'query', 'body']

    const checkSchema = key.find((e)=>{
        return  Object.keys(schema).find((v) =>{
            return v=== e
        })
    })

    if (checkSchema) {
        return next()
    } 
    
    
    // if (key.find(Object.keys(schema)) && Object.keys(schema) === req.method) {
    //     next()
    // } else {
    //     throw new Error()
    // }
    

}

module.exports = {
    validate
}