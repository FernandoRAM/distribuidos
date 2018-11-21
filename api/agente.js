const express = require('express');

const router = express.Router();
var db = require('./db');

db.connect( (err) => {
    if(err){
      throw(err);
    }
    console.log("Base de datos conectada");
  
  } );


router.get('/test', function(req, res, next){
        res.send('Hola');
    });

router.get('/login', function(req, res, next){
    let consulta = 'SELECT * FROM usuarios';
    db.query(consulta, (err, result)=>{
        if(err) throw err;
        res.json(result);
    });
});

module.exports = router;