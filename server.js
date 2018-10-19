var express = require('express');
var mongoose = require('mongoose');
var requireDir = require('require-dir');

//Inicinando o App
var app = express();

//Inciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

var Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
       title: "React Native",
       description: "Build native apps with React",
       url: "http://github.com/facebook/react-native" 
    });
    return res.send('Hello World');
});

app.listen(3001);