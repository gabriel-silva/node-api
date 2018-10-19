var express = require('express');
var routes = express.Router();
var productController = require('./controllers/ProductController');

routes.get('/products', productController.index);
routes.post('/products', productController.store);
routes.get('/products/:id', productController.show);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);

module.exports = routes;