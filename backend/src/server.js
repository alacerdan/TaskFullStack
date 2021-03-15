const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

'use strict';

// Settings server
const server = express();
server.disable('x-powered-by');
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());




const port = process.env.PORT || 5000

server.listen(port, () => console.log("Running server on PORT", port));