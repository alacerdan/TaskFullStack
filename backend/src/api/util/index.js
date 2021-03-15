const fs = require('fs');

'use strict';


// Create promise from function that receives callback
const createPromise = (fn) => {
    return (path) => {
        return new Promise((resolve, reject) => fn(path, 'utf8', (error, res) => error? reject(error):resolve(res)))
    }
}
// Promisify function
const readFile = createPromise(fs.readFile)

// Convert function -> default from VEF to EUR
const convertCurreny = ({value}, 
                        unit=7.55,
                        currency='EUR') =>  {
    value = `${(+value/unit).toFixed(2)}`
    return {value, currency}
}

module.exports = {
    createPromise,
    readFile,
    convertCurreny
}