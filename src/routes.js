var express = require('express');
var routes = express.Router();
var productController = require('./controllers/ProductController');

routes.get('/products', productController.index);

module.exports = routes;