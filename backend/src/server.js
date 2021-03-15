const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./api/routes');


'use strict';

// Settings server

const server = express();
server.disable('x-powered-by'); //supress powered-by information
server.use(express.json());
server.use(morgan('dev'));      // mode development
server.use(cors());             // enable cors to allow all origin

// Routes 
server.use('/', routes);


const port = process.env.PORT || 5000

server.listen(port, () => console.log("Running server on PORT", port));