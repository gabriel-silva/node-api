var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        var products = await Product.find();
        return res.json(products);
    }
};