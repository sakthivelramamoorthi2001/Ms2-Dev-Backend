const dotenv = require('dotenv')
const Joi = require('joi')
const path = require('path')


dotenv.config({ path: path.join(__dirname, '../../.env') })

const envVariables = Joi.object().keys({
    NODE_ENV : Joi.string().valid('dev', 'test').required(),
    PORT : Joi.number().required().description('local port number'),
    DATABASE_URL: Joi.string().required()
}).unknown()

const { value: envVars, error} = envVariables.prefs({ errors: { label: 'key' } }).validate(process.env)
// console.log(error);

if (error) {
    throw new Error('env validation error',error.message)
}

module.exports = {
    env : envVars.NODE_ENV,
    port : envVars.PORT
}

