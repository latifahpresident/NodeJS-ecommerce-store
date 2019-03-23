const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.getAll(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
      });
    });
  };

 exports.getIndex = (req, res, next) => {
  Product.getAll(products => {
    res.render('shop/index', { //this renders a view from the views dir.
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
 }

 exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      pageTitle: 'Your Cart',
      path: '/cart',
    });
 };

 exports.getCheckout = (req, res, next) => {
   res.render('shop/checkout',{
      path: '/checkout',
      pageTitle: 'Checkout'
   }
   );
 };