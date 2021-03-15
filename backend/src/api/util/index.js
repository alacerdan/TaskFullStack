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


module.exports = {
    createPromise,
    readFile
}