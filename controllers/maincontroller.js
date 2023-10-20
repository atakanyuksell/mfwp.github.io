const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  
    res.render('index');
    
    
};

exports.getIndex = (req,res,next) => {

    res.render('index');
    console.log(products[1]);
  };
