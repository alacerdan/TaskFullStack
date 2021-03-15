const express = require('express');
const router = express.Router();


'use strict';

router.get("/", (req, res) => {
    res.send('<h1>API Clever Advertising!</h1>');
})

module.exports = router;