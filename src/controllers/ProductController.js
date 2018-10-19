var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        var products = await Product.find();
        return res.json(products);
    },
    async show(req, res){
        var product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async store(req, res) {
        var product = await Product.create(req.body);
        return res.json(product);
    },
    async update(req, res){
        //{new: true} retorna o produto atualizado para a variável product.
        var product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },
    async destroy(req, res){
        var product = await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};
