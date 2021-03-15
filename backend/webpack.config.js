const path = require('path');

module.exports = {
    mode:'production',
    entry:'./src/server.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'api.bundle.js'
    },
    target: 'node'
}