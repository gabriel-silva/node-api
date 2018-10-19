var express = require('express');
var mongoose = require('mongoose');

//Inicinando o App
var app = express();

//Inciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// Primeira rota
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3001);