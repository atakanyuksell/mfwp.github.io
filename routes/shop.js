const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/shop', shopController.getProducts);

router.get('/products');

router.get('/cart');

router.get('/checkout');

module.exports = router;
