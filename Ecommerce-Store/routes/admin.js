const path = require('path');

const express = require('express');
const adminControllers = require('../controllers/admin.js')

const router = express.Router();


router.get('/add-product', adminControllers.getAddProduct);
router.get('/products', adminControllers.getAdminProducts);
router.post('/add-product', adminControllers.postAddProduct); 

module.exports = router

