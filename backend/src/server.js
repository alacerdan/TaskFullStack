const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./api/routes');


'use strict';

// Settings server
const server = express();
server.disable('x-powered-by');
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

// Routes 
server.use('/', routes);


const port = process.env.PORT || 5000

server.listen(port, () => console.log("Running server on PORT", port));