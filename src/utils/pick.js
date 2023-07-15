/**
@param {Object} object
@param {string[]} keys
@returns {Object}
*/



const pickWhichCorrect = (object, keys) => {
    keys.reduce((obj,key) => {
        if(Object && Object.prototype.hasOwnProperty.call(object, key)){
            obj[key] = object[key];
        }
    return obj;

    },{})
}

module.exports = {
    pickWhichCorrect
}