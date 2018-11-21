const express = require('express');
const mysql = require('mysql');

 // var db = mysql.createConnection({
 //   host: 'us-cdbr-iron-east-01.cleardb.net',
 //   user: 'b4f1e92a086645',
 //   password: 'c0a87ce7',
 //   database: 'heroku_fe65737ce663a8e'
 // });
  var connection  = mysql.createPool({
    connectionLimit : 10,
    host            : 'us-cdbr-iron-east-01.cleardb.net',
    user            : 'b4f1e92a086645',
    password        : 'c0a87ce7',
    database        : 'heroku_fe65737ce663a8e' 
  });
  
  module.exports = db;