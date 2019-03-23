const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body)
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');

};

exports.getAdminProducts = (req, res, next) => {
    Product.getAll(products => {
      res.render( 'admin/products', {
        pageTitle: 'Admin Products',
        path: 'admin/products',
        prods: products,
      });
    });
  };