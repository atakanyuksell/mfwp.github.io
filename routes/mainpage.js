const path = require('path');

const Product = require('../models/product');

const express = require('express');

const mainController = require('../controllers/maincontroller');

const router = express.Router();

router.get("/", mainController.getProducts);

module.exports = router;