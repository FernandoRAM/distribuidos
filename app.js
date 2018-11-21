
const express = require('express');
const mysql = require('mysql');
var app = express();
const port = process.env.PORT || 3000;

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const agente = require('./api/agente');
//const administrador = require('./api/administrador');

app.use('/agente', agente);
//app.use('/administrador', agente);

app.listen(port);