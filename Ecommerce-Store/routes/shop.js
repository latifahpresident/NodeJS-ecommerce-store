const path = require('path');

const express = require('express');

const shopContoller = require('../controllers/shop');

const router = express.Router();

router.get('/', shopContoller.getIndex);
router.get('/products', shopContoller.getProducts);
router.get('/products/:id');
router.get('/cart', shopContoller.getCart);
router.get('/checkout', shopContoller.getCheckout);
module.exports = router