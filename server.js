var express = require('express');
var mongoose = require('mongoose');
var requireDir = require('require-dir');

//Inicinando o App
var app = express();
app.use(express.json()); //permissão de recebimento de json

//Inciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);