const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/property.controller');


'use strict';

// Hello API

router.get("/", (req, res) => {
    res.send('<h1>API Clever Advertising!</h1>');
})

// Propriety resources

router.get("/properties", getAll)       // To get all the data
      .get("/properties/:id", getById)  // To get all data by id

module.exports = router;